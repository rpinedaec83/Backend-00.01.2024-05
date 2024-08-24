const Ordenes = require('../models/ordenes');


exports.createOrdenes = async (req, res) => {
  try {
    const ordenes = new Ordenes(req.body);
    await ordenes.save();
    res.status(201).json(ordenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear orden', error });
  }
};


exports.getOrdenes = async (req, res) => {
  try {
    const ordenes = await Ordenes.find().populate('userId').populate('cursoId');
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener órdenes', error });
  }
};


exports.getOrdenesById = async (req, res) => {
  try {
    const ordenes = await Ordenes.findById(req.params.id).populate('userId').populate('cursoId');
    if (!ordenes) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener orden', error });
  }
};


exports.updateOrdenes = async (req, res) => {
  try {
    const ordenes = await Ordenes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ordenes) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar orden', error });
  }
};


exports.deleteOrdenes = async (req, res) => {
  try {
    const ordenes = await Ordenes.findByIdAndDelete(req.params.id);
    if (!ordenes) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar orden', error });
  }
};
