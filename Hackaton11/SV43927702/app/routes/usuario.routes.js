
module.exports = app => {
    let router = require("express").Router();
    const usuarios = require("../controllers/usuario.controller.js");
    


    router.post("/", usuarios.create);
    router.get("/", usuarios.findAll);
    router.get("/:id", usuarios.findOne);
    router.put("/:id", usuarios.update);
    router.delete("/:id", usuarios.delete);
    router.delete("/", usuarios.deleteAll);

    app.use('/api/usuarios', router);
}