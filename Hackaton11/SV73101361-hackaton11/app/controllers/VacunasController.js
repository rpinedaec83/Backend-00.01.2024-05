const db = require('../models')
const Vacunas = db.Vacunas;
const Usuario = db.Usuario;

exports.getAllVacunas = async (req, res) => {
    try {
        const vacunas = await Vacunas.findAll({
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(vacunas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener vacunas' });
    }
};

exports.getVacunaById = async (req, res) => {
    try {
        const vacuna = await Vacunas.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (vacuna) {
            res.json(vacuna);
        } else {
            res.status(404).json({ error: 'Vacuna no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener vacuna' });
    }
};

exports.createVacuna = async (req, res) => {
    try {
        const nuevaVacuna = await Vacunas.create(req.body);
        res.status(201).json(nuevaVacuna);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear vacuna' });
    }
};

exports.updateVacuna = async (req, res) => {
    try {
        const [updated] = await Vacunas.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const vacuna = await Vacunas.findByPk(req.params.id);
            res.json(vacuna);
        } else {
            res.status(404).json({ error: 'Vacuna no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar vacuna' });
    }
};

exports.deleteVacuna = async (req, res) => {
    try {
        const deleted = await Vacunas.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Vacuna no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar vacuna' });
    }
};
