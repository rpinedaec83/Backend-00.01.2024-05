const express = require('express');
const router = express.Router();

// Simulación de pasarela de pago
router.post('/', (req, res) => {
  const { orderId, paymentMethod } = req.body;
  // Aquí se simula el procesamiento del pago
  res.json({ message: `Payment for order ${orderId} using ${paymentMethod} was successful.` });
});

module.exports = router;
