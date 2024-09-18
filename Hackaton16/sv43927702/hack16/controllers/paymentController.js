const stripeService = require('../services/stripeService');
const paymentModel = require('../models/paymentModel');

exports.createPayment = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const paymentIntent = await stripeService.createPaymentIntent(userId, productId);
        await paymentModel.savePayment(userId, productId, paymentIntent);
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
