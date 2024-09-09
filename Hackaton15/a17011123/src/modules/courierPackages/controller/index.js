// src/modules/courierPackages/controller/index.js
import CourierPackage from '../entity/index.js';

export const createPackage = async (req, res) => {
  const { trackingNumber, status, sender, recipient } = req.body;
  
  if (!trackingNumber || !status || !sender || !recipient) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  const packa = await CourierPackage.findOne({
  where: { trackingNumber } // Busca un paquete con el trackingNumber especificado
});

  console.log(packa)
  if (packa) {
    return res.status(400).json({ error: 'trackingNumber repetido' });
  }  

  try {
    const newPackage = await CourierPackage.create({ trackingNumber, status, sender, recipient });
    res.status(201).json(newPackage);
  } catch (error) {
 
    res.status(500).json({ error: error.message });
  }
};

export const getPackage = async (req, res) => {
  try {
    // const package = await CourierPackage.findByPk(req.params.id);
    // if (package) {
    //   res.json(package);
    // } else {
    //   res.status(404).json({ message: 'Package not found' });
    // }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const [updated] = await CourierPackage.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedPackage = await CourierPackage.findByPk(req.params.id);
      res.json(updatedPackage);
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    const deleted = await CourierPackage.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
