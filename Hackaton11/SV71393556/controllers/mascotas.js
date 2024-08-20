const Mascota = requiere("../models/mascota");

const createMascota = async (req, res) => {
    const { nombre, tipo, raza, edad, peso, duenoId } = req.body;
  
    const newMascota = await Mascota.create({
      nombre,
      tipo,
      raza,
      edad,
      peso,
      duenoId,
    });
    await newMascota.save();
  
    res.json(newMascota);
  };
  
  
  module.exports = {
    createMascota,
  };