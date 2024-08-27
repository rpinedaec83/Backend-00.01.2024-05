import { Coupon, ICoupon } from '../models/Coupon';

export class CouponRepository {
    async create(couponData: ICoupon): Promise<ICoupon> {
        const coupon = new Coupon(couponData);
        return await coupon.save();
    }

    async findById(id: string): Promise<ICoupon | null > { 
        return await Coupon.findById(id);
    }

    async findByCode(code: string): Promise<ICoupon | null > { 
        return await Coupon.findOne({code});
    }

    async findAll(): Promise<ICoupon[]>{
        return await Coupon.find();
    }

    async update( id: string, updateData: Partial<ICoupon>): Promise <ICoupon | null> {
        return await Coupon.findByIdAndUpdate(id,updateData, {new: true});
    }

    async delete( id: string): Promise<ICoupon | null> {
        return await Coupon.findByIdAndDelete(id);
    }
}