const db = require('../models');
const Mascota = db.Mascota;
const Raza = db.Raza;
const Color = db.Color;
const Sexo = db.Sexo;
const Usuario = db.Usuario;

exports.getAllMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.findAll({
            include: [
                { model: Raza, as: 'raza' },
                { model: Color, as: 'color' },
                { model: Sexo, as: 'sexo' },
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener mascotas' });
    }
};

exports.getMascotaById = async (req, res) => {
    try {
        const mascota = await Mascota.findByPk(req.params.id, {
            include: [
                { model: Raza, as: 'raza' },
                { model: Color, as: 'color' },
                { model: Sexo, as: 'sexo' },
                { model: Usuario, as: 'creador', attributes: ['username'] },
                { model: Usuario, as: 'modificador', attributes: ['username'] }
            ]
        });
        if (mascota) {
            res.json(mascota);
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener mascota' });
    }
};

exports.createMascota = async (req, res) => {
    try {
        const nuevaMascota = await Mascota.create(req.body);
        res.status(201).json(nuevaMascota);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear mascota' });
    }
};

exports.updateMascota = async (req, res) => {
    try {
        const [updated] = await Mascota.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const mascota = await Mascota.findByPk(req.params.id);
            res.json(mascota);
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar mascota' });
    }
};

exports.deleteMascota = async (req, res) => {
    try {
        const deleted = await Mascota.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar mascota' });
    }
};
