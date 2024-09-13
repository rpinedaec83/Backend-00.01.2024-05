const Stripe = require('stripe');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (amount, currency = 'usd', metadata = {}) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
    });
    return paymentIntent;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.retrievePaymentIntent = async (id) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    return paymentIntent;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.constructEvent = (payload, sig, endpointSecret) => {
    try {
      const event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      return event;
    } catch (error) {
      throw new Error(`Webhook Error: ${error.message}`);
    }
  };
  