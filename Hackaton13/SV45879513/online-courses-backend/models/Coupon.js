const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  code: { type: String, unique: true },
  discount: Number,
  validUntil: Date,
});

module.exports = mongoose.model('Coupon', CouponSchema);
