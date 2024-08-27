const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course', required: true }],
  totalAmount: Number,
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
