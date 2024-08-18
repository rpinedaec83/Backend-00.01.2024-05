const db = require('../models')
const Ubigeo = db.Ubigeo;

exports.getAllUbigeos = async (req, res) => {
    try {
        const ubigeos = await Ubigeo.findAll();
        res.json(ubigeos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ubigeos' });
    }
};

exports.getUbigeoById = async (req, res) => {
    try {
        const ubigeo = await Ubigeo.findByPk(req.params.id);
        if (ubigeo) {
            res.json(ubigeo);
        } else {
            res.status(404).json({ error: 'Ubigeo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ubigeo' });
    }
};

exports.createUbigeo = async (req, res) => {
    try {
        const nuevoUbigeo = await Ubigeo.create(req.body);
        res.status(201).json(nuevoUbigeo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear ubigeo' });
    }
};

exports.updateUbigeo = async (req, res) => {
    try {
        const [updated] = await Ubigeo.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const ubigeo = await Ubigeo.findByPk(req.params.id);
            res.json(ubigeo);
        } else {
            res.status(404).json({ error: 'Ubigeo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar ubigeo' });
    }
};

exports.deleteUbigeo = async (req, res) => {
    try {
        const deleted = await Ubigeo.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Ubigeo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar ubigeo' });
    }
};
