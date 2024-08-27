import mongoose from "../../../config/db/index.js";
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  code: {type: String, required: true},
  discount: {type: Number, required: true}
});

const CouponModel = mongoose.model('Coupon', CouponSchema);
export default CouponModel;