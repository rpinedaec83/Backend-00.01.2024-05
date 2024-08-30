import { Schema, model , Document } from 'mongoose';

export interface ICoupon extends Document {
    code: string, 
    discountPercentage: number,
    validFrom: Date,
    validTo: Date,
    createdAt: Date,
    updatedAt: Date,
}

const couponSchema = new Schema<ICoupon>({
    code: {type: String , required: true, unique: true},
    discountPercentage: {type: Number , required: true },
    validFrom: {type: Date, required: true},
    validTo: {type: Date, required:true },

},{timestamps: true});

export const Coupon = model<ICoupon>('Coupon',couponSchema);