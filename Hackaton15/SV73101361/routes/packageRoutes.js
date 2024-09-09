const express = require('express');
const { createPackage, getUserPackages } = require('../controllers/packageController');
const validateJwt = require('../middlewares/validateJwt');

const router = express.Router();

// Crear un nuevo paquete
router.post('/', validateJwt, createPackage);

// Obtener paquetes del usuario autenticado
router.get('/', validateJwt, getUserPackages);

module.exports = router;
