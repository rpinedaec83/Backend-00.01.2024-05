const stripeService = require('../services/stripeService');
const refundModel = require('../models/refundModel');
const paymentModel = require('../models/paymentModel');

exports.createRefund = async (req, res) => {
    const { paymentId } = req.body;

    try {
        // Verificar si el pago existe en la base de datos
        const payment = await paymentModel.getPaymentById(paymentId);

        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }

        // Verificar si el pago ya ha sido reembolsado
        const existingRefund = await refundModel.getRefundByPaymentId(paymentId);
        if (existingRefund) {
            return res.status(400).json({ error: 'This payment has already been refunded' });
        }

        // Crear la devolución en Stripe
        const refund = await stripeService.createRefund(payment.stripe_payment_id, payment.amount);

        // Guardar la devolución en la base de datos
        await refundModel.saveRefund(paymentId, payment.amount, refund.id, 'processed');

        res.json({ success: true, refundId: refund.id });
    } catch (error) {
        console.error('Error processing refund:', error);
        res.status(500).json({ error: 'Failed to process refund' });
    }
};
