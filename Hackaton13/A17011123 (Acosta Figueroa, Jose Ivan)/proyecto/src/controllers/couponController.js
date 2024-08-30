const asyncHandler = require('express-async-handler');
const Coupon = require('../models/couponModel');

// Crear un nuevo cupón
const createCoupon = asyncHandler(async (req, res) => {
    const { code, discount, expirationDate } = req.body;

    const couponExists = await Coupon.findOne({ code });

    if (couponExists) {
        res.status(400);
        throw new Error('Coupon already exists');
    }

    const coupon = new Coupon({
        code,
        discount,
        expirationDate,
    });

    const createdCoupon = await coupon.save();
    res.status(201).json(createdCoupon);
});

// Obtener todos los cupones
const getCoupons = asyncHandler(async (req, res) => {
    const coupons = await Coupon.find({});
    res.json(coupons);
});

// Actualizar un cupón
const updateCoupon = asyncHandler(async (req, res) => {
    const { code, discount, expirationDate } = req.body;

    const coupon = await Coupon.findById(req.params.id);

    if (coupon) {
        coupon.code = code || coupon.code;
        coupon.discount = discount || coupon.discount;
        coupon.expirationDate = expirationDate || coupon.expirationDate;

        const updatedCoupon = await coupon.save();
        res.json(updatedCoupon);
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

// Eliminar un cupón
const deleteCoupon = asyncHandler(async (req, res) => {
    const coupon = await Coupon.findById(req.params.id);

    if (coupon) {
        await coupon.remove();
        res.json({ message: 'Coupon removed' });
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

module.exports = {
    createCoupon,
    getCoupons,
    updateCoupon,
    deleteCoupon,
};
