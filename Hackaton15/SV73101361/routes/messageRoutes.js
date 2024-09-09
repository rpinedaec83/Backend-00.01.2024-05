const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const validateJwt = require('../middlewares/validateJwt');

const router = express.Router();

// Enviar un mensaje para un paquete
router.post('/', validateJwt, sendMessage);

// Obtener mensajes de un paquete específico
router.get('/:packageId', validateJwt, getMessages);

module.exports = router;
