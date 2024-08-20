const db = require ('../models');
const Raza = db.Raza;
const Usuario = db.Usuario;

exports.getAllRazas = async (req, res) => {
    try {
        const razas = await Raza.findAll({
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(razas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener razas' });
    }
};

exports.getRazaById = async (req, res) => {
    try {
        const raza = await Raza.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (raza) {
            res.json(raza);
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener raza' });
    }
};

exports.createRaza = async (req, res) => {
    try {
        const nuevaRaza = await Raza.create(req.body);
        res.status(201).json(nuevaRaza);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear raza' });
    }
};

exports.updateRaza = async (req, res) => {
    try {
        const [updated] = await Raza.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const raza = await Raza.findByPk(req.params.id);
            res.json(raza);
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar raza' });
    }
};

exports.deleteRaza = async (req, res) => {
    try {
        const deleted = await Raza.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar raza' });
    }
};
