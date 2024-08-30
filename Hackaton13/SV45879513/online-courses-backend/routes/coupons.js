const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');

// Crear un nuevo cupón
router.post('/', async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    const savedCoupon = await newCoupon.save();
    res.status(201).json(savedCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todos los cupones
router.get('/', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un cupón
router.put('/:id', async (req, res) => {
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Eliminar un cupón
router.delete('/:id', async (req, res) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.json({ message: 'Coupon deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
