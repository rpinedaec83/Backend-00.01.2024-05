const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

console.log('userController:', userController); // Verificar si el controlador se está importando correctamente
console.log('userController.getProfile:', userController.getProfile); // Verificar si getProfile está definido
console.log('userController.updateProfile:', userController.updateProfile); // Verificar si updateProfile está definido
console.log('protect middleware:', protect); // Verificar si el middleware protect está importado

// Rutas protegidas para el usuario
router.get('/profile', protect, (req, res, next) => {
  console.log('Ruta /profile alcanzada'); // Verificar si la ruta es alcanzada
  userController.getProfile(req, res, next);
});
router.put('/profile', protect, (req, res, next) => {
  console.log('Ruta /profile [PUT] alcanzada'); // Verificar si la ruta PUT es alcanzada
  userController.updateProfile(req, res, next);
});

module.exports = router;