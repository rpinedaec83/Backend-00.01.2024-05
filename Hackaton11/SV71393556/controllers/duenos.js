const Dueno = require("../models/dueno");

const listDuenos = async (req, res) => {
  const result = await Dueno.findAll();

  res.json(result);
};
const createDueno = async (req, res) => {
  const { nombres, direccion, telefono, email } = req.body;

  const newDueno = await Dueno.create({
    nombres,
    direccion,
    telefono,
    email,
  });
  await newDueno.save();

  res.json(newDueno);
};

module.exports = {
  createDueno,
  listDuenos,
};
