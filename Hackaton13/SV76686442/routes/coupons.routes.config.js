const CouponsController = require('../controllers/coupons.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const AuthMiddleware = require('../common/middlewares/auth.middleware');
const Variables= require('../common/config/env.config');
const ADMIN=Variables.permissionLevels.ADMIN;

module.exports.routesConfig = function (app) {
    app.post('/coupons', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CouponsController.createCoupon]);
    app.get('/coupons', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CouponsController.listCoupons]);
    app.get('/coupons/:couponId', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CouponsController.getCouponById]);
    app.patch('/coupons/:couponId', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CouponsController.updateCouponById]);
    app.delete('/coupons/:couponId', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CouponsController.deleteCouponById]);
};
