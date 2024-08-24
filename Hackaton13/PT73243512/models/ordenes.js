const mongoose = require('mongoose');

const ordenesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cursoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  status: { type: String, enum: ['pendiente', 'completado'], default: 'pendiente' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ordenes', ordenesSchema); 
