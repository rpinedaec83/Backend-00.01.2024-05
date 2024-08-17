import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './models';
import shoppingListRoutes from './routes/shoppingList.routes';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Configurar CORS
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

// Sincronizar modelos con la base de datos
db.sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err: Error) => {
        console.error('Error synchronizing the database:', err);
    });

// Importar las rutas
app.use('/api', shoppingListRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
