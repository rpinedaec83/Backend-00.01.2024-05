module.exports = app => {
    let router = require("express").Router();
    const razas = require("../controllers/especie.controller.js");
    


    router.post("/", razas.create);
    router.get("/", razas.findAll);
    router.get("/:id", razas.findOne);
    router.put("/:id", razas.update);
    router.delete("/:id", razas.delete);
    router.delete("/", razas.deleteAll);

    app.use('/api/razas', router);
}