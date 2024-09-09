const express = require('express');
const { Package, Message, Location } = require('../models');
const router = express.Router();

router.post('/crear', async (req, res) => {
  try {
    const { descripcion, usuario_id } = req.body;
    const paquete = await Package.create({ descripcion, usuario_id, estado: 'Enviado' });
    res.json(paquete);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paquete' });
  }
});

router.post('/:paquete_id/mensaje', async (req, res) => {
  try {
    const { mensaje, usuario_id } = req.body;
    const nuevoMensaje = await Message.create({ paquete_id: req.params.paquete_id, usuario_id, mensaje });
    res.json(nuevoMensaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

router.post('/:paquete_id/ubicacion', async (req, res) => {
  try {
    const { latitud, longitud } = req.body;
    const nuevaUbicacion = await Location.create({ paquete_id: req.params.paquete_id, latitud, longitud });
    res.json(nuevaUbicacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ubicación' });
  }
});

module.exports = router;
