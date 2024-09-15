const Stripe = require('stripe');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Webhook: Construct Stripe event
exports.constructEvent = (payload, sig, endpointSecret) => {
  try {
    const event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    return event;
  } catch (error) {
    throw new Error(`Webhook Error: ${error.message}`);
  }
};
