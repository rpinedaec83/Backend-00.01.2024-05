import http, {IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes/shoppingList.routes'
import sequelize from './config/db.config';

dotenv.config();

const corsMiddleWare = cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type']
});

const server = http.createServer((req: IncomingMessage, res:ServerResponse)=> {
    corsMiddleWare(req,res , () => {
        routes(req,res);
    }) 
});

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
}).catch((err: Error) => {
    console.error('Error al sincronizar la base de datos', err);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});