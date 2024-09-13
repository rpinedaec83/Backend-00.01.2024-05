const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

console.log('userController:', userController);
console.log('userController.getProfile:', userController.getProfile);
console.log('protect:', protect);

// Rutas protegidas para el usuario
router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, userController.updateProfile);

module.exports = router;
