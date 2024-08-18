module.exports = app => {
    let router = require("express").Router();
    const sexos = require("../controllers/sexo.controller.js");
    


    router.post("/", sexos.create);
    router.get("/", sexos.findAll);
    router.get("/:id", sexos.findOne);
    router.put("/:id", sexos.update);
    router.delete("/:id", sexos.delete);
    router.delete("/", sexos.deleteAll);

    app.use('/api/sexos', router);
}