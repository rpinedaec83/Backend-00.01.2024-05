const express = require('express');
const { simulatePayment } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:id/pay').post(protect, simulatePayment);

module.exports = router;
