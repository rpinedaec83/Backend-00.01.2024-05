import {Order, IOrder } from '../models/Order';

export class OrderRepository {
    async create(orderData: IOrder): Promise<IOrder> {
        const order = new Order(orderData);
        return await order.save();
    }

    async findById(id: string): Promise<IOrder | null> {
        return await Order.findById(id).populate('user').populate('courses').populate('coupon');
    }

    async findAll(): Promise<IOrder[]> {
        return await Order.find().populate('user').populate('courses').populate('coupon');
    }

    async update(id: string, updateData: Partial<IOrder>): Promise<IOrder| null> {
        return await Order.findByIdAndUpdate(id,updateData, {new: true}).populate('user').populate('courses').populate('coupon');
    }

    async delete(id: string): Promise<IOrder| null> {
        return await Order.findByIdAndDelete(id);
    }
}