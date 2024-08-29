const express = require('express');
const router = express.Router();
const Mensaje = require('../models/mensaje');

router.post('/mensaje', async (req, res) => {
  const { user_id, username, mensaje } = req.body;
  let responseMensaje = mensaje;

  if (mensaje.toLowerCase().includes('hola bot')) {
    responseMensaje = '¡Hola! ¿En qué puedo ayudarte?';
  } else if (mensaje.toLowerCase().includes('hora')) {
    responseMensaje = `La hora actual es ${new Date().toLocaleTimeString()}`;
  }

  const newMensaje = new Mensaje({ user_id, username, mensaje: responseMensaje });
  await newMensaje.save();
  res.status(201).send(newMensaje);
});

router.get('/mensaje', async (req, res) => {
  const mensajes = await Mensaje.find().sort({ timestamp: -1 });
  res.send(mensajes);
});

router.delete('/mensaje', async (req, res) => {
  await Mensaje.deleteMany({});
  res.status(200).send({ mensaje: 'Historial borrado' });
});

router.put('/mensaje/:id', async (req, res) => {
  const { id } = req.params;
  const { mensaje } = req.body;
  const updatedMensaje = await Mensaje.findByIdAndUpdate(id, { mensaje }, { new: true });
  res.send(updatedMensaje);
});

module.exports = router;
