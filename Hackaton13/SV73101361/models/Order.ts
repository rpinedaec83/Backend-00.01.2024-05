import {Schema, model, Document, Types } from 'mongoose';
import { IUser } from './User';
import { ICourse } from './Course';
import { ICoupon } from './Coupon';

export interface IOrder extends Document{
    user: IUser['_id'];
    courses: Types.Array<ICourse['_id']>;
    coupon?: ICoupon['_id'];
    totalAmount: number;
    status: 'pending' | 'paid' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new Schema<IOrder>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: Schema.Types.ObjectId , ref: 'Course', required: true}],
    coupon: { type: Schema.Types.ObjectId , ref: 'Coupon' , required: false },
    totalAmount: {type: Number , required: true},
    status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending'},
},{timestamps: true});

export const Order = model<IOrder>('Order' , orderSchema);