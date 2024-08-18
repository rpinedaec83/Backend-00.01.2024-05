const db = require('../models');
const Propietario = db.Propietario;
const Nacionalidad = db.Nacionalidad;
const Usuario = db.Usuario;

exports.getAllPropietarios = async (req, res) => {
    try {
        const propietarios = await Propietario.findAll({
            include: [
                { model: Nacionalidad, as: "nacionalidad" },
                { model: Usuario, as: "creador", attributes: ["username"] },
                { model: Usuario, as: "modificador", attributes: ["username"] }
            ]
        });
        res.json(propietarios);
    } catch (error) {
        console.error('Error al obtener propietarios:', error);
        res.status(500).json({ error: "Error al obtener propietarios" });
    }
};

exports.getPropietarioById = async (req, res) => {
    try {
        const propietario = await Propietario.findByPk(req.params.id, {
            include: [
                { model: Nacionalidad, as: "nacionalidad" },
                { model: Usuario, as: "creador", attributes: ["username"] },
                { model: Usuario, as: "modificador", attributes: ["username"] }
            ]
        });
        if (propietario) {
            res.json(propietario);
        } else {
            res.status(404).json({ error: "Propietario no encontrado" });
        }
    } catch (error) {
        console.error('Error al obtener propietario:', error);
        res.status(500).json({ error: "Error al obtener propietario" });
    }
};

exports.createPropietario = async (req, res) => {
    try {
        const nuevoPropietario = await Propietario.create(req.body);
        res.status(201).json(nuevoPropietario);
    } catch (error) {
        console.error('Error al crear propietario:', error);
        res.status(500).json({ error: 'Error al crear propietario', details: error.message });
    }
};

exports.updatePropietario = async (req, res) => {
    try {
        const [updated] = await Propietario.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const propietario = await Propietario.findByPk(req.params.id);
            res.json(propietario);
        } else {
            res.status(404).json({ error: "Propietario no encontrado" });
        }
    } catch (error) {
        console.error('Error al actualizar propietario:', error);
        res.status(500).json({ error: "Error al actualizar propietario" });
    }
};

exports.deletePropietario = async (req, res) => {
    try {
        const deleted = await Propietario.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Propietario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar propietario:', error);
        res.status(500).json({ error: "Error al eliminar propietario" });
    }
};
