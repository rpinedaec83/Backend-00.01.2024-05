const express = require('express');
const router = express.Router();
const Mensaje = require('../models/mensaje');

router.get('/api/mensajes', async (req, res) => {
    try {
        const mensajes = await Mensaje.find();
        res.json(mensajes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/mensajes', async (req, res) => {
    try {
        const nuevoMensaje = new Mensaje(req.body);
        await nuevoMensaje.save();
        res.status(201).send(nuevoMensaje);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;


module.exports = router;
