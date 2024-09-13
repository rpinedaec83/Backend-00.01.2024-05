const { Order, OrderItem } = require('../models/Order');
const Course = require('../models/Course');
const stripeService = require('../services/stripeService');

// Crear un nuevo pedido y procesar el pago
exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items } = req.body;

    // Validar los cursos y calcular el total
    let totalAmount = 0;
    const courses = [];

    for (const item of items) {
      const course = await Course.findByPk(item.courseId);
      if (!course) {
        return res.status(404).json({ message: `Curso con ID ${item.courseId} no encontrado` });
      }
      const quantity = item.quantity || 1;
      const price = parseFloat(course.price);
      totalAmount += price * quantity;
      courses.push({ course, quantity });
    }

    // Convertir el monto total a centavos (Stripe maneja montos en la unidad más pequeña de la moneda)
    const amountInCents = Math.round(totalAmount * 100);

    // Crear la intención de pago con Stripe
    const paymentIntent = await stripeService.createPaymentIntent(amountInCents, 'usd', {
      userId,
    });

    const newOrder = await Order.create({
      userId,
      totalAmount,
      status: 'pending',
      paymentIntentId: paymentIntent.id,
    });

    // Devolver el clientSecret al frontend para completar el pago
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido', error: error.message });
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
    event = stripeService.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  if (event.type === 'payment_intent.succeeded') {
  const paymentIntent = event.data.object;

  // Actualizar el estado del pedido
  const order = await Order.findOne({ where: { paymentIntentId: paymentIntent.id } });

  if (order) {
    order.status = 'completed';
    await order.save();
  }
}

  res.json({ received: true });
};
