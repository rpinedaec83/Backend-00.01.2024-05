const express = require('express');
const app = express();
const port = 3000; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./app/routes/color.routes')(app);


app.get('/', (req, res) => {
    res.send('Aplicación Express en funcionamiento');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//tarea1