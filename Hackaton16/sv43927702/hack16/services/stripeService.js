const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (userId, productId) => {
    const product = await productModel.getProductById(productId);
    return await stripe.paymentIntents.create({
        amount: product.price * 100,
        currency: 'usd',
        payment_method_types: ['card'],
    });
};

exports.createRefund = async (paymentIntentId) => {
    return await stripe.refunds.create({ payment_intent: paymentIntentId });
};
