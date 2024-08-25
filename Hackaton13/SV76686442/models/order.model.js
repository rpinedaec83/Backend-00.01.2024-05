const mongoose = require('../common/services/mongoose.service').mongoose;

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    totalAmount: { type: Number, required: false },  // Agregado para manejar el monto total
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    appliedCoupon: { type: String }  // Agregado para manejar cupones aplicados
});

OrderSchema.statics.createOrder = function(order) {
    return this.create(order);
};

OrderSchema.statics.listOrders = function(limit, page) {
    return this.find().limit(limit).skip(page * limit);
};

OrderSchema.statics.listOrdersUserId = function(limit, page,userId) {
    return this.find({userId:userId}).limit(limit).skip(page * limit);
};

OrderSchema.statics.findOrderById = function(id) {
    return this.findById(id);
};


OrderSchema.statics.updateOrderById = function(id, order) {
    return this.findByIdAndUpdate(id, order, { new: true });
};

OrderSchema.statics.deleteOrderById = function(id) {
    return this.findByIdAndRemove(id);
};

module.exports = mongoose.model('Order', OrderSchema);
