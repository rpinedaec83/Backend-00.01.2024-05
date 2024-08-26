module.exports = app => {
    let router = require("express").Router();
 
    const consulta = require("../controllers/consulta.controller.js");
    
    router.post("/consultas",consulta.create);
    router.get("/",consulta.findAll);
    router.get("/:id",consulta.findOne);
    router.put("/:id",consulta.update);
    router.delete("/:id",consulta.delete);
 
    app.use('/api/consulta', router);
}