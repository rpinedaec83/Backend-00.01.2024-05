const db = require('../models')
const Sexo = db.Sexo;
const Usuario = db.Usuario;

exports.getAllSexos = async (req, res) => {
    try {
        const sexos = await Sexo.findAll({
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(sexos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener sexos' });
    }
};

exports.getSexoById = async (req, res) => {
    try {
        const sexo = await Sexo.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (sexo) {
            res.json(sexo);
        } else {
            res.status(404).json({ error: 'Sexo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener sexo' });
    }
};

exports.createSexo = async (req, res) => {
    try {
        const nuevoSexo = await Sexo.create(req.body);
        res.status(201).json(nuevoSexo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear sexo' });
    }
};

exports.updateSexo = async (req, res) => {
    try {
        const [updated] = await Sexo.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const sexo = await Sexo.findByPk(req.params.id);
            res.json(sexo);
        } else {
            res.status(404).json({ error: 'Sexo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar sexo' });
    }
};

exports.deleteSexo = async (req, res) => {
    try {
        const deleted = await Sexo.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Sexo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar sexo' });
    }
};
