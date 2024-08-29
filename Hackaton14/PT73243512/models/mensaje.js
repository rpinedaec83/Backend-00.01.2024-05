const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  mensaje: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensaje', mensajeSchema);
