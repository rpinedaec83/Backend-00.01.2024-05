const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mensajeRoutes = require('./routes/mensajeRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

app.use(bodyParser.json());

app.use(express.static('public'));


app.use('/api', mensajeRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
