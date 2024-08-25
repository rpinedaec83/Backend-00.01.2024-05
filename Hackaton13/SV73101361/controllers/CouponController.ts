import { Request, Response } from 'express';
import { CouponService } from '../services/CouponService';

export class CouponController {
    private couponService: CouponService;

    constructor() {
        this.couponService = new CouponService();
    }

    async createCoupon(req: Request, res: Response): Promise<void> {
        try {
            const coupon = await this.couponService.createCoupon(req.body);
            res.status(201).json(coupon);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getCouponById(req: Request, res: Response): Promise<void> {
        try {
            const coupon = await this.couponService.getCouponById(req.params.id);
            if (coupon) {
                res.status(200).json(coupon);
            } else {
                res.status(404).json({ message: 'Coupon not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getCouponByCode(req: Request, res: Response): Promise<void> {
        try {
            const coupon = await this.couponService.getCouponByCode(req.params.code);
            if (coupon) {
                res.status(200).json(coupon);
            } else {
                res.status(404).json({ message: 'Coupon not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getAllCoupons(req: Request, res: Response): Promise<void> {
        try {
            const coupons = await this.couponService.getAllCoupons();
            res.status(200).json(coupons);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async updateCoupon(req: Request, res: Response): Promise<void> {
        try {
            const coupon = await this.couponService.updateCoupon(req.params.id, req.body);
            if (coupon) {
                res.status(200).json(coupon);
            } else {
                res.status(404).json({ message: 'Coupon not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async deleteCoupon(req: Request, res: Response): Promise<void> {
        try {
            const coupon = await this.couponService.deleteCoupon(req.params.id);
            if (coupon) {
                res.status(200).json({ message: 'Coupon deleted successfully' });
            } else {
                res.status(404).json({ message: 'Coupon not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }
}
