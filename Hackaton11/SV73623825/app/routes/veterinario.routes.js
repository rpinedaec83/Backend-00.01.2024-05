module.exports = app => {
    let router = require("express").Router();
 
   
    const mascota = require("../controllers/mascota.controller.js");
    
    router.post("/mascotas",mascota.create);
    router.get("/",mascota.findAll);
    router.get("/:id",mascota.findOne);
    router.put("/:id",mascota.update);
    router.delete("/:id",mascota.delete);
 
    app.use('/api/mascota', router);
}