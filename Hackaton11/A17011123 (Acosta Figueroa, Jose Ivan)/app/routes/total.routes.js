module.exports = app => {
    let router = require("express").Router();

    const usuario = require("../controllers/usuario.controller.js");
    const especie = require("../controllers/especie.controller.js");
    const raza = require("../controllers/raza.controller.js");
    const sexo = require("../controllers/sexo.controller.js");
    const color = require("../controllers/color.controller.js");
    const vacunas = require("../controllers/vacunas.controller.js");
    const nacionalidad = require("../controllers/nacionalidad.controller.js");
    const ubigeo = require("../controllers/ubigeo.controller.js");
    const propietario = require("../controllers/propietario.controller.js");
    const mascota = require("../controllers/mascota.controller.js");
    const mascotaVacunas = require("../controllers/mascotaVacunas.controller.js");

    // Rutas para Usuario
    router.post("/usuario", usuario.create);
    router.get("/usuario", usuario.findAll);
    router.get("/usuario/:id", usuario.findOne);
    router.put("/usuario/:id", usuario.update);
    router.delete("/usuario/:id", usuario.delete);
    router.delete("/usuario", usuario.deleteAll);

    // Rutas para Especie
    router.post("/especie", especie.create);
    router.get("/especie", especie.findAll);
    router.get("/especie/:id", especie.findOne);
    router.put("/especie/:id", especie.update);
    router.delete("/especie/:id", especie.delete);
    router.delete("/especie", especie.deleteAll);

    // Rutas para Raza
    router.post("/raza", raza.create);
    router.get("/raza", raza.findAll);
    router.get("/raza/:id", raza.findOne);
    router.put("/raza/:id", raza.update);
    router.delete("/raza/:id", raza.delete);
    router.delete("/raza", raza.deleteAll);

    // Rutas para Sexo
    router.post("/sexo", sexo.create);
    router.get("/sexo", sexo.findAll);
    router.get("/sexo/:id", sexo.findOne);
    router.put("/sexo/:id", sexo.update);
    router.delete("/sexo/:id", sexo.delete);
    router.delete("/sexo", sexo.deleteAll);

    // Rutas para Color
    router.post("/color", color.create);
    router.get("/color", color.findAll);
    router.get("/color/:id", color.findOne);
    router.put("/color/:id", color.update);
    router.delete("/color/:id", color.delete);
    router.delete("/color", color.deleteAll);

    // Rutas para Vacunas
    router.post("/vacunas", vacunas.create);
    router.get("/vacunas", vacunas.findAll);
    router.get("/vacunas/:id", vacunas.findOne);
    router.put("/vacunas/:id", vacunas.update);
    router.delete("/vacunas/:id", vacunas.delete);
    router.delete("/vacunas", vacunas.deleteAll);

    // Rutas para Nacionalidad
    router.post("/nacionalidad", nacionalidad.create);
    router.get("/nacionalidad", nacionalidad.findAll);
    router.get("/nacionalidad/:id", nacionalidad.findOne);
    router.put("/nacionalidad/:id", nacionalidad.update);
    router.delete("/nacionalidad/:id", nacionalidad.delete);
    router.delete("/nacionalidad", nacionalidad.deleteAll);

    // Rutas para Ubigeo
    router.post("/ubigeo", ubigeo.create);
    router.get("/ubigeo", ubigeo.findAll);
    router.get("/ubigeo/:id", ubigeo.findOne);
    router.put("/ubigeo/:id", ubigeo.update);
    router.delete("/ubigeo/:id", ubigeo.delete);
    router.delete("/ubigeo", ubigeo.deleteAll);

    // Rutas para Propietario
    router.post("/propietario", propietario.create);
    router.get("/propietario", propietario.findAll);
    router.get("/propietario/:id", propietario.findOne);
    router.put("/propietario/:id", propietario.update);
    router.delete("/propietario/:id", propietario.delete);
    router.delete("/propietario", propietario.deleteAll);

    // Rutas para Mascota
    router.post("/mascota", mascota.create);
    router.get("/mascota", mascota.findAll);
    router.get("/mascota/:id", mascota.findOne);
    router.put("/mascota/:id", mascota.update);
    router.delete("/mascota/:id", mascota.delete);
    router.delete("/mascota", mascota.deleteAll);

    // Rutas para MascotaVacunas
    router.post("/mascotaVacunas", mascotaVacunas.create);
    router.get("/mascotaVacunas", mascotaVacunas.findAll);
    router.get("/mascotaVacunas/:id", mascotaVacunas.findOne);
    router.put("/mascotaVacunas/:id", mascotaVacunas.update);
    router.delete("/mascotaVacunas/:id", mascotaVacunas.delete);
    router.delete("/mascotaVacunas", mascotaVacunas.deleteAll);

    app.use('/api', router);
};
