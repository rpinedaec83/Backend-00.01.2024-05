const Cupon = require('../models/cupon');


exports.createCupon = async (req, res) => {
  try {
    const cupon = new Cupon(req.body);
    await cupon.save();
    res.status(201).json(cupon);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cupón', error });
  }
};


exports.getCupon = async (req, res) => {
  try {
    const cupones = await Cupon.find();
    res.json(cupones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cupones', error });
  }
};


exports.getCuponById = async (req, res) => {
  try {
    const cupon = await Cupon.findById(req.params.id);
    if (!cupon) return res.status(404).json({ message: 'Cupón no encontrado' });
    res.json(cupon);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cupón', error });
  }
};


exports.updateCupon = async (req, res) => {
  try {
    const cupon = await Cupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cupon) return res.status(404).json({ message: 'Cupón no encontrado' });
    res.json(cupon);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cupón', error });
  }
};


exports.deleteCupon = async (req, res) => {
  try {
    const cupon = await Cupon.findByIdAndDelete(req.params.id);
    if (!cupon) return res.status(404).json({ message: 'Cupón no encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cupón', error });
  }
};
