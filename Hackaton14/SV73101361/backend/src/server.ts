import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/dbConfig';
import chatRoutes from './routes/chatRoutes';
import { configureSocket } from './socket/socketHandler';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Permitir acceso desde el frontend
    methods: ["GET", "POST"],
  },
});

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas del chat
app.use('/api', chatRoutes);

// Configurar Socket.io
io.on('connection', (socket) => {
  console.log(`A user connected with socket ID: ${socket.id}`);
  
  // Aquí puedes manejar otros eventos de socket, como desconexión
  socket.on('disconnect', () => {
    console.log(`User with socket ID: ${socket.id} disconnected`);
  });

  // Llama a la función de configuración del socket
  configureSocket(io);
});

// Sincronizar la base de datos
sequelize.sync().then(() => {
  console.log('Database connected');
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
