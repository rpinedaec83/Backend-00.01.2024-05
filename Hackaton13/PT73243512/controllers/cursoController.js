const Curso = require('../models/curso'); 

exports.createCurso = async (req, res) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.status(201).json(curso);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Datos no válidos', error: error.message });
    }
    res.status(500).json({ message: 'Error al crear curso', error: error.message });
  }
};

exports.getCurso = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cursos', error: error.message });
  }
};

exports.getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json(curso);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido', error: error.message });
    }
    res.status(500).json({ message: 'Error al obtener curso', error: error.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json(curso);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Datos no válidos', error: error.message });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido', error: error.message });
    }
    res.status(500).json({ message: 'Error al actualizar curso', error: error.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByIdAndDelete(req.params.id);
    if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });
    res.status(204).send();
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID no válido', error: error.message });
    }
    res.status(500).json({ message: 'Error al eliminar curso', error: error.message });
  }
};
