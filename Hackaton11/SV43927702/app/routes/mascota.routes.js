
module.exports = app => {
    let router = require("express").Router();
    const propietario = require("../controllers/propietario.controller.js");
    


    router.post("/",propietario.create);
    router.get("/",propietario.findAll);
    router.get("/:id",propietario.findOne);
    router.put("/:id",propietario.update);
    router.delete("/:id",propietario.delete);
    router.delete("/",propietario.deleteAll);

    app.use('/api/propietarios', router);
}