const Package = require('../models/Package');

// Crear un nuevo paquete
const createPackageService = async (packageData) => {
  try {
    const newPackage = await Package.create(packageData);
    return newPackage;
  } catch (error) {
    throw new Error('Error al crear el paquete: ' + error.message);
  }
};

// Obtener paquetes de un usuario específico
const getUserPackagesService = async (userId) => {
  try {
    const packages = await Package.findAll({ where: { userId } });
    return packages;
  } catch (error) {
    throw new Error('Error al obtener los paquetes: ' + error.message);
  }
};

module.exports = { createPackageService, getUserPackagesService };
