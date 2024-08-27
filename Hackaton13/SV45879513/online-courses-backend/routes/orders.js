const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Crear una nueva orden
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todas las órdenes
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('courses');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
