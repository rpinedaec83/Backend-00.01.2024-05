const Package = require('../models/Package');

// Crear un nuevo paquete
const createPackage = async (req, res) => {
  const { trackingNumber, status, location } = req.body;
  try {
    const newPackage = await Package.create({
      trackingNumber,
      status,
      location,
      userId: req.user.id,
    });
    res.status(201).json({ success: true, package: newPackage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear el paquete', error });
  }
};

// Obtener los paquetes de un usuario
const getUserPackages = async (req, res) => {
  try {
    const packages = await Package.findAll({ where: { userId: req.user.id } });
    res.json({ success: true, packages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los paquetes', error });
  }
};

module.exports = { createPackage, getUserPackages };
