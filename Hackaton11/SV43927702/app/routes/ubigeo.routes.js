module.exports = app => {
    let router = require("express").Router();
    const ubigeo = require("../controllers/ubigeo.controller.js");
    


    router.post("/", ubigeo.create);
    router.get("/", ubigeo.findAll);
    router.get("/:id", ubigeo.findOne);
    router.put("/:id", ubigeo.update);
    router.delete("/:id", ubigeo.delete);
    router.delete("/", ubigeo.deleteAll);

    app.use('/api/ubigeo', router);
}