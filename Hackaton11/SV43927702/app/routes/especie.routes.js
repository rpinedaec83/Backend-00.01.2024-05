module.exports = app => {
    let router = require("express").Router();
    const especies = require("../controllers/especie.controller.js");
    


    router.post("/", especies.create);
    router.get("/", especies.findAll);
    router.get("/:id", especies.findOne);
    router.put("/:id", especies.update);
    router.delete("/:id", especies.delete);
    router.delete("/", especies.deleteAll);

    app.use('/api/especies', router);
}