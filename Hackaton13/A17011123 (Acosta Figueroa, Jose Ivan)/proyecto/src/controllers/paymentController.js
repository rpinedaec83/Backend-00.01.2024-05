const asyncHandler = require('express-async-handler');
const Payment = require('../models/paymentModel');
const Order = require('../models/orderModel');

// Simular pago de una orden
const simulatePayment = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();

        const updatedOrder = await order.save();

        const paymentResult = {
            id: 'fake_payment_id',
            status: 'Completed',
            update_time: Date.now(),
            email_address: req.user.email,
        };

        const payment = new Payment({
            order: updatedOrder._id,
            paymentResult,
        });

        await payment.save();

        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

module.exports = {
    simulatePayment,
};
