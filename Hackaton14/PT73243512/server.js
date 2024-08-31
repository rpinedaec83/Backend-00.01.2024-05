const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

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

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    socket.on('sendMensaje', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('receiveMensaje', data);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
