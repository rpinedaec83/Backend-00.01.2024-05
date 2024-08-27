const express = require('express');
const { addOrderItems, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getUserOrders);

module.exports = router;
