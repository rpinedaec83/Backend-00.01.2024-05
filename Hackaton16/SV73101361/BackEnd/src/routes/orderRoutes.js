const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

// Rutas protegidas para pedidos
router.post('/', protect, orderController.createOrder);
router.get('/', protect, orderController.getUserOrders);
router.get('/:id', protect, orderController.getOrderById);

// Ruta para el webhook de Stripe (no protegida)
router.post('/webhook', express.raw({ type: 'application/json' }), orderController.handleStripeWebhook);

module.exports = router;
