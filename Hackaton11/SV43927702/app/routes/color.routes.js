module.exports = app => {
    let router = require("express").Router();
    const colors = require("../controllers/color.controller.js");
    


    router.post("/", colors.create);
    router.get("/", colors.findAll);
    router.get("/:id", colors.findOne);
    router.put("/:id", colors.update);
    router.delete("/:id", colors.delete);
    router.delete("/", colors.deleteAll);

    app.use('/api/colors', router);
}