const { Order } = require('../models/Order');
const Course = require('../models/Course');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Crear una sesión de Stripe Checkout
exports.createCheckoutSession = async (req, res) => {
  try {
    // Crear una sesión de Checkout con los items enviados en el body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Curso ID: ${item.courseId}`,
          },
          unit_amount: 5000, // Precio en centavos
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    // Devolver el sessionId para Stripe Checkout
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error al crear la sesión de Checkout:', error);
    res.status(500).json({ error: 'No se pudo crear la sesión de pago' });
  }
};

// Obtener todos los pedidos del usuario autenticado
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.findAll({
      where: { userId },
      include: [
        {
          model: Course,
          through: { attributes: ['quantity'] },
        },
      ],
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error: error.message });
  }
};

// Obtener un pedido específico por ID
exports.getOrderById = async (req, res) => {
  try {
    const userId = req.user.id;
    const orderId = req.params.id;

    const order = await Order.findOne({
      where: { id: orderId, userId },
      include: [
        {
          model: Course,
          through: { attributes: ['quantity'] },
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pedido', error: error.message });
  }
};

// Webhook para manejar eventos de Stripe
exports.handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Aquí podrías actualizar el estado del pedido en tu base de datos
    const order = await Order.findOne({ where: { paymentIntentId: session.payment_intent } });

    if (order) {
      order.status = 'completed';
      await order.save();
    }
  }

  res.json({ received: true });
};
