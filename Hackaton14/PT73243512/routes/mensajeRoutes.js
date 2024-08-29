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

router.post('/api/mensajes', async (req, res) => {
    const mensaje = new Mensaje({
        texto: req.body.texto,
        usuario: req.body.usuario || 'Anónimo'
    });

    try {
        const nuevoMensaje = await mensaje.save();
        res.status(201).json(nuevoMensaje);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
