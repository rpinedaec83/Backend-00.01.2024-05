const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const session = require('express-session');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes');
const messageRoutes = require('./routes/messageRoutes');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const cors = require('cors');  // Importar CORS

// Cargar las variables de entorno
dotenv.config();

const app = express();
const server = http.createServer(app);  // Crear un servidor HTTP
const io = new Server(server, {
  cors: {
    origin: "*",  // Permitir el origen del frontend
    methods: ["GET", "POST"],  // Permitir métodos GET y POST
    credentials: true,  // Permitir cookies o cabeceras de autenticación
  }
});

// Permitir CORS para todo el backend
app.use(cors());

// Servir archivos estáticos
app.use(express.static('public'));

// Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/messages', messageRoutes);

// Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');
  
  // Manejo de eventos de mensajes
  socket.on('enviarMensaje', (data) => {
    console.log('Mensaje recibido:', data);
    // Reenviar el mensaje a todos los clientes conectados
    io.emit('mensajeRecibido', data);
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

// Iniciar el servidor y sincronizar con la base de datos
const PORT = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar con la base de datos:', err);
  });
