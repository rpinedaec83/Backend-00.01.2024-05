const mongoose = require('mongoose');

const MensajeSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Mensaje', MensajeSchema);
