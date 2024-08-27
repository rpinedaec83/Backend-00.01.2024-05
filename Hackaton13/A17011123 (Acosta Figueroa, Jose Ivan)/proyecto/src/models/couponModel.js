const mongoose = require('mongoose');

const couponSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
