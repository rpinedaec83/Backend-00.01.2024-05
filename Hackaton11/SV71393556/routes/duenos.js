const { Router } = require("express");
const { createDueno, listDuenos } = require("../controllers/duenos");

const duenoRouter = Router();

duenoRouter.get("/", listDuenos);

duenoRouter.post("/dueno", createDueno);

module.exports = duenoRouter;
