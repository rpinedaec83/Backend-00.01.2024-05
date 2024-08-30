const mongoose = require('../common/services/mongoose.service').mongoose;

const CouponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true },
    expirationDate: { type: Date, required: true },
});

CouponSchema.statics.createCoupon = function(coupon) {
    return this.create(coupon);
};

CouponSchema.statics.listCoupons = function(limit, page) {
    return this.find().limit(limit).skip(page * limit);
};

CouponSchema.statics.findCouponById = function(id) {
    return this.findById(id);
};

CouponSchema.statics.updateCouponById = function(id, coupon) {
    return this.findByIdAndUpdate(id, coupon, { new: true });
};

CouponSchema.statics.deleteCouponById = function(id) {
    return this.findByIdAndRemove(id);
};

module.exports = mongoose.model('Coupon', CouponSchema);
