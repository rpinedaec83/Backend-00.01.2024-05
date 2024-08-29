const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config(); 


console.log('MongoDB URI:', process.env.DATABASE_URL); 
mongoose.connect(process.env.DATABASE_URL);  
const db = mongoose.connection;
db.on('error', (error) => console.error('Error al conectar a la base de datos:', error));
db.once('open', () => console.log('Conectado a la base de datos'));


app.use(express.json());
app.use(express.static('public'));


const mensajeRoutes = require('./routes/mensajeRoutes');
const chatRouter = require('./routes/chat');

app.use('/', chatRouter);
app.use('/', mensajeRoutes);

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
