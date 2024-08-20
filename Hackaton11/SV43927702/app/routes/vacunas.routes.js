module.exports = app => {
    let router = require("express").Router();
    const vacunas = require("../controllers/vacunas.controller.js");
    


    router.post("/", vacunas.create);
    router.get("/", vacunas.findAll);
    router.get("/:id", vacunas.findOne);
    router.put("/:id", vacunas.update);
    router.delete("/:id", vacunas.delete);
    router.delete("/", vacunas.deleteAll);

    app.use('/api/vacunas', router);
}