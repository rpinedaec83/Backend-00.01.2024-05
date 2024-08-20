// index.js (or main entry file)
const express = require('express');
const app = express();
const port = 3000;
const db = require('./models'); // Path to your models/index.js

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes/color.routes')(app);

app.get('/', (req, res) => {
    res.send('Aplicación Express en funcionamiento');
});

db.sequelize.sync({ force: false }) // Change to true if you need to recreate tables
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });
