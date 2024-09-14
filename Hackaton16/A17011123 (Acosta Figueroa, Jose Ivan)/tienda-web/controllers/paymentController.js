const db = require("../models");
const Payment = db.Payment;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // clave secreta de Stripe en  archivo .env

exports.createPayment = async (req, res) => {
  try {
    const { userId, amount, paymentMethodId } = req.body;

    // Crea un nuevo intento de pago en Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), //  maneja montos en centavos
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true // Confirmar el pago inmediatamente
    });

    // Guarda el pago en la base de datos
    const payment = await Payment.create({
      userId,
      amount,
      status: paymentIntent.status, // Estado del pago (succeeded, failed, etc.)
      stripePaymentId: paymentIntent.id
    });

    res.json({ message: "Payment processed successfully", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
