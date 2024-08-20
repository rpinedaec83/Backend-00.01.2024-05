module.exports = app => {
    let router = require("express").Router();
 
   
    const veterinario = require("../controllers/veterinario.controller.js");
    
    router.post("/veterinarios",veterinario.create);
    router.get("/",veterinario.findAll);
    router.get("/:id",veterinario.findOne);
    router.put("/:id",veterinario.update);
    router.delete("/:id",veterinario.delete);
 
    app.use('/api/veterinario', router);
}