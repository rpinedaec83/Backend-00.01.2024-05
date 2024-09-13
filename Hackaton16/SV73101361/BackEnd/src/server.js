const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('../config/database');
const passport = require('passport');
require('../config/passport'); // Configuración de Passport
const cookieParser = require('cookie-parser');

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const orderRoutes = require('./routes/orderRoutes');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Crear servidor HTTP
const server = http.createServer(app);

// Configurar Socket.io
const io = new Server(server, {
  cors: {
    origin: '*', // Ajusta el origen según tus necesidades
    methods: ['GET', 'POST'],
  },
});

// Middlewares
app.use(cors());
app.use('/api/orders/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/orders', orderRoutes);
// Middleware de manejo de errores (después de todas las rutas)
app.use(errorHandler);
app.use(notFoundHandler);

// Manejo de errores (puedes crear un middleware de manejo de errores global)
// app.use(require('./middlewares/errorHandler'));

// Configurar Socket.io
require('./sockets/chatSocket')(io);

// Iniciar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });