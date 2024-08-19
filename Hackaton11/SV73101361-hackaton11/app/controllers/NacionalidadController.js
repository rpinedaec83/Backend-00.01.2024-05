const db = require('../models');
const Nacionalidad = db.Nacionalidad;
const Usuario = db.Usuario;

exports.getAllNacionalidades = async (req, res) => {
    try {
        const nacionalidades = await Nacionalidad.findAll({
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(nacionalidades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener nacionalidades' });
    }
};

exports.getNacionalidadById = async (req, res) => {
    try {
        const nacionalidad = await Nacionalidad.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (nacionalidad) {
            res.json(nacionalidad);
        } else {
            res.status(404).json({ error: 'Nacionalidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener nacionalidad' });
    }
};

exports.createNacionalidad = async (req, res) => {
    try {
        const nuevaNacionalidad = await Nacionalidad.create(req.body);
        res.status(201).json(nuevaNacionalidad);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear nacionalidad' });
    }
};

exports.updateNacionalidad = async (req, res) => {
    try {
        const [updated] = await Nacionalidad.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const nacionalidad = await Nacionalidad.findByPk(req.params.id);
            res.json(nacionalidad);
        } else {
            res.status(404).json({ error: 'Nacionalidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar nacionalidad' });
    }
};

exports.deleteNacionalidad = async (req, res) => {
    try {
        const deleted = await Nacionalidad.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Nacionalidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar nacionalidad' });
    }
};
