import { CouponRepository } from '../repositories/CouponRepository';
import { ICoupon } from '../models/Coupon';

export class CouponService {
    private couponRepository: CouponRepository;

    constructor() {
        this.couponRepository = new CouponRepository();
    }

    async createCoupon(couponData: Partial<ICoupon>): Promise<ICoupon> {
        // Validar que todas las propiedades necesarias están presentes
        if (!couponData.code || !couponData.discountPercentage || !couponData.validFrom || !couponData.validTo) {
            throw new Error('Missing required fields');
        }

        // Convertir Partial<ICoupon> a ICoupon asegurando que todas las propiedades requeridas están presentes
        const completeCouponData: ICoupon = {
            code: couponData.code,
            discountPercentage: couponData.discountPercentage,
            validFrom: couponData.validFrom,
            validTo: couponData.validTo,
            createdAt: new Date(), // Puedes manejar estas fechas como sea apropiado para tu lógica
            updatedAt: new Date(),
        } as ICoupon;

        return await this.couponRepository.create(completeCouponData);
    }

    async getCouponById(id: string): Promise<ICoupon | null> {
        return await this.couponRepository.findById(id);
    }

    async getCouponByCode(code: string): Promise<ICoupon | null> {
        return await this.couponRepository.findByCode(code);
    }

    async getAllCoupons(): Promise<ICoupon[]> {
        return await this.couponRepository.findAll();
    }

    async updateCoupon(id: string, updateData: Partial<ICoupon>): Promise<ICoupon | null> {
        return await this.couponRepository.update(id, updateData);
    }

    async deleteCoupon(id: string): Promise<ICoupon | null> {
        return await this.couponRepository.delete(id);
    }
}
