const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// Crear una nueva orden
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
        return;
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
});

// Obtener órdenes de un usuario
const getUserOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
});

module.exports = {
    addOrderItems,
    getUserOrders,
};
