module.exports = app => {
    let router = require("express").Router();
 
    const dueno = require("../controllers/dueno.controller.js");
    
    router.post("/duenos",dueno.create);
    router.get("/",dueno.findAll);
    router.get("/:id",dueno.findOne);
    router.put("/:id",dueno.update);
    router.delete("/:id",dueno.delete);
 
    app.use('/api/dueno', router);
}