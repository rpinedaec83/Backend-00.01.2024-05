const db = require('../models');
const Color = db.Color;
const Usuario = db.Usuario;

exports.getAllColores = async (req, res) => {
    try {
        const colores = await Color.findAll({
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(colores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener colores' });
    }
};

exports.getColorById = async (req, res) => {
    try {
        const color = await Color.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (color) {
            res.json(color);
        } else {
            res.status(404).json({ error: 'Color no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener color' });
    }
};

exports.createColor = async (req, res) => {
    try {
        const nuevoColor = await Color.create(req.body);
        res.status(201).json(nuevoColor);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear color' });
    }
};

exports.updateColor = async (req, res) => {
    try {
        const [updated] = await Color.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const color = await Color.findByPk(req.params.id);
            res.json(color);
        } else {
            res.status(404).json({ error: 'Color no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar color' });
    }
};

exports.deleteColor = async (req, res) => {
    try {
        const deleted = await Color.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Color no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar color' });
    }
};
