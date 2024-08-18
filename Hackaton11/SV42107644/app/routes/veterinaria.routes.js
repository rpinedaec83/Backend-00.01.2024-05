module.exports = app => {
    let router = require("express").Router();
    const ubigeo = require("../controllers/ubigeo.controller.js");
    const nacionalidad = require("../controllers/nacionalidad.controller.js");
    const propietario = require("../controllers/propietario.controller.js");

    const sexo = require("../controllers/sexo.controller.js");
    const raza = require("../controllers/raza.controller.js");
    const especie = require("../controllers/especie.controller.js");
    const color = require("../controllers/color.controller.js");

    const vacunas = require("../controllers/vacunas.controller.js");
    const mascota = require("../controllers/mascota.controller.js");


    // Rutas para Ubigeo
    router.post("/", ubigeo.create);
    router.get("/", ubigeo.findAll);
    router.get("/:id", ubigeo.findOne);
    router.put("/:id", ubigeo.update);
    router.delete("/:id", ubigeo.delete);
    router.delete("/", ubigeo.deleteAll);
    app.use('/api/ubigeo', router);

    // Rutas para Nacionalidad
    router = require("express").Router();
    router.post("/", nacionalidad.create);
    router.get("/", nacionalidad.findAll);
    router.get("/:id", nacionalidad.findOne);
    router.put("/:id", nacionalidad.update);
    router.delete("/:id", nacionalidad.delete);
    router.delete("/", nacionalidad.deleteAll);
    app.use('/api/nacionalidad', router);

    // Rutas para Propietario
    router = require("express").Router();
    router.post("/", propietario.create);
    router.get("/", propietario.findAll);
    router.get("/:id", propietario.findOne);
    router.put("/:id", propietario.update);
    router.delete("/:id", propietario.delete);
    router.delete("/", propietario.deleteAll);
    app.use('/api/propietario', router);

    // Rutas para Sexo
    router = require("express").Router();
    router.post("/", sexo.create);
    router.get("/", sexo.findAll);
    router.get("/:id", sexo.findOne);
    router.put("/:id", sexo.update);
    router.delete("/:id", sexo.delete);
    router.delete("/", sexo.deleteAll);
    app.use('/api/sexo', router);

    // Rutas para Raza
    router = require("express").Router();
    router.post("/", raza.create);
    router.get("/", raza.findAll);
    router.get("/:id", raza.findOne);
    router.put("/:id", raza.update);
    router.delete("/:id", raza.delete);
    router.delete("/", raza.deleteAll);
    app.use('/api/raza', router);

    // Rutas para Especie
    router = require("express").Router();
    router.post("/", especie.create);
    router.get("/", especie.findAll);
    router.get("/:id", especie.findOne);
    router.put("/:id", especie.update);
    router.delete("/:id", especie.delete);
    router.delete("/", especie.deleteAll);
    app.use('/api/especie', router);

    // Rutas para Color
    router = require("express").Router();
    router.post("/", color.create);
    router.get("/", color.findAll);
    router.get("/:id", color.findOne);
    router.put("/:id", color.update);
    router.delete("/:id", color.delete);
    router.delete("/", color.deleteAll);
    app.use('/api/color', router);

    // Rutas para Vacunas
    router = require("express").Router()
    router.post("/", vacunas.create);
    router.get("/", vacunas.findAll);
    router.get("/:id", vacunas.findOne);
    router.put("/:id", vacunas.update);
    router.delete("/:id", vacunas.delete);
    router.delete("/", vacunas.deleteAll);
    app.use('/api/vacunas', router);
        
    // Rutas para Mascota
    router = require("express").Router();
    router.post("/", mascota.create);
    router.get("/", mascota.findAll);
    router.get("/:id", mascota.findOne);
    router.put("/:id", mascota.update);
    router.delete("/:id", mascota.delete);
    router.delete("/", mascota.deleteAll);
    router.post("/:id/vacunas", mascota.addVacunas);
    router.delete("/:id/vacunas", mascota.removeVacunas);
    app.use('/api/mascota', router);
}