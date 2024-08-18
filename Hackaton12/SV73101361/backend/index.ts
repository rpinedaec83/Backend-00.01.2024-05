import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import sequelize from './config/db.config';
import { routes } from './routes/shoppingList.routes';
import cors from 'cors';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de CORS con opciones
const corsMiddleware = cors({
  origin: '*', // Permitir todas las solicitudes desde cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
});

// Crear el servidor HTTP
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Aplicar el middleware CORS
  corsMiddleware(req, res, () => {
    routes(req, res);
  });
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((err: Error) => {
    console.error('Error al sincronizar la base de datos:', err);
  });

// Iniciar el servidor en el puerto definido en el archivo .env
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
