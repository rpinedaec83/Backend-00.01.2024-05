const express = require('express');
const refundController = require('../controllers/refundController');

const router = express.Router();

// Ruta para procesar una nueva devolución
router.post('/refunds', refundController.createRefund);

// Ruta para obtener una devolución por el ID de pago
router.get('/refunds/payment/:paymentId', refundController.getRefundByPaymentId);

// Ruta para obtener todas las devoluciones de un cliente
router.get('/refunds/customer/:customerId', refundController.getRefundsByCustomerId);

// Ruta para actualizar el estado de una devolución
router.put('/refunds/:refundId', refundController.updateRefundStatus);

module.exports = router;
