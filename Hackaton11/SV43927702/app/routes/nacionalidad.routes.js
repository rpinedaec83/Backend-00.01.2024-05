module.exports = app => {
    let router = require("express").Router();
    const nacionalidad = require("../controllers/nacionalidad.controller.js");
    


    router.post("/", nacionalidad.create);
    router.get("/", nacionalidad.findAll);
    router.get("/:id", nacionalidad.findOne);
    router.put("/:id", nacionalidad.update);
    router.delete("/:id", nacionalidad.delete);
    router.delete("/", nacionalidad.deleteAll);

    app.use('/api/nacionalidad', router);
}