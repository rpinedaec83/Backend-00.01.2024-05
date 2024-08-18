const { Router } = require("express");
const { createMascota } = require("../controllers/mascotas");

const mascotasRouter = Router();

//crear mascota
mascotasRouter.post("/mascota", createMascota);

module.exports = mascotasRouter;
