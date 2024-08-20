const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db=require("./app/models");
//creacion de tabla sincronizate
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Error al conectar BD " + err.message);
    });
//ruta
app.get("/", (req, res) => {
    res.json({ message: "bienvenido a la aplicacion de Veterinaria" });
});




//rutas
require("./app/routes/usuario.routes")(app);
require("./app/routes/color.routes")(app);
require("./app/routes/especie.routes")(app);
require("./app/routes/raza.routes")(app);
require("./app/routes/sexo.routes")(app);
require("./app/routes/vacunas.routes")(app);
require("./app/routes/ubigeo.routes")(app);
require("./app/routes/nacionalidad.routes")(app);
require("./app/routes/propietario.routes")(app);
require("./app/routes/mascota.routes")(app);



//para hacer correr
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});