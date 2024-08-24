const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuponSchema = new Schema({
  codigo: { type: String, required: true },
  descripcion: { type: String },
  descuento: { type: Number, required: true }, 
  valido: { type: Date, required: true } 
});

const Cupon = mongoose.model('Cupon', cuponSchema);
module.exports = Cupon;
