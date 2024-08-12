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
const colorRoutes = require ('./app/routes/color_routes');
const mascotaRoutes = require('./app/routes/mascota_routes');
const nacionalidadRoutes = require('./app/routes/nacionalidad_routes');
const razaRoutes = require('./app/routes/raza_routes');
const sexoRoutes = require('./app/routes/sexo_routes');
const ubigeoRoutes = require('./app/routes/ubigeo_routes');
const vacunasRoutes = require('./app/routes/vacunas_routes');

// Usar rutas de propietario
app.use('/api/propietarios', propietarioRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/color', colorRoutes);
app.use('/api/mascota', mascotaRoutes);
app.use('/api/nacionalidad', nacionalidadRoutes);
app.use('/api/raza', razaRoutes);
app.use('/api/sexo', sexoRoutes);
app.use('/api/ubigeo', ubigeoRoutes);
app.use('/api/vacunas', vacunasRoutes);

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
