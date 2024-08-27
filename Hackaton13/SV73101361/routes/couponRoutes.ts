import { Router } from 'express';
import { CouponController } from '../controllers/CouponController';
import { authMiddleWare } from '../middlewares/authMiddleware';

const router = Router();
const couponController = new CouponController();

router.post('/', authMiddleWare, couponController.createCoupon.bind(couponController));
router.get('/:id', authMiddleWare, couponController.getCouponById.bind(couponController));
router.get('/code/:code', authMiddleWare, couponController.getCouponByCode.bind(couponController));
router.get('/', authMiddleWare, couponController.getAllCoupons.bind(couponController));
router.put('/:id', authMiddleWare, couponController.updateCoupon.bind(couponController));
router.delete('/:id', authMiddleWare, couponController.deleteCoupon.bind(couponController));

export default router;
