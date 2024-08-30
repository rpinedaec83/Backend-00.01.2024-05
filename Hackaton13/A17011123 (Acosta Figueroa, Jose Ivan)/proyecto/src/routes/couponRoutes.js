const express = require('express');
const { createCoupon, getCoupons, updateCoupon, deleteCoupon } = require('../controllers/couponController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getCoupons)
    .post(protect, admin, createCoupon);

router.route('/:id')
    .put(protect, admin, updateCoupon)
    .delete(protect, admin, deleteCoupon);

module.exports = router;
