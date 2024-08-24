const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String },
  portada: { type: String },
  valor: { type: Number, required: true }
});

const Curso = mongoose.model('Curso', cursoSchema);
module.exports = Curso;
