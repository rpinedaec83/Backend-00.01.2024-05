const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Parseo de solicitudes JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas de propietario
const propietarioRoutes = require('./app/routes/propietario_routes');
const usuarioRoutes = require ('./app/routes/usuario_routes');

// Usar rutas de propietario
app.use('/api/propietarios', propietarioRoutes);
app.use('/api/usuarios', usuarioRoutes);

const db = require('./app/models');

// Sincronizar la base de datos y luego iniciar el servidor
db.sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Failed to sync database:', err.message);
    });
