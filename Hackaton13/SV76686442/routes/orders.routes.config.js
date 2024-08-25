const OrdersController = require('../controllers/orders.controller');
const AuthMiddleware = require('../common/middlewares/auth.middleware');

module.exports.routesConfig = function (app) {
    app.post('/orders', [AuthMiddleware.validJWTNeeded,OrdersController.createOrder]);
    app.post('/orders/:orderId/pay', [AuthMiddleware.validJWTNeeded,OrdersController.processOrderPayment]);
    app.get('/orders', [AuthMiddleware.validJWTNeeded,OrdersController.listOrders]);
    app.get('/orders/:orderId',  [AuthMiddleware.validJWTNeeded,OrdersController.getOrderById]);
    app.patch('/orders/:orderId', [AuthMiddleware.validJWTNeeded,OrdersController.updateOrderById]);
    app.delete('/orders/:orderId', [AuthMiddleware.validJWTNeeded,OrdersController.deleteOrderById]);
    
};
