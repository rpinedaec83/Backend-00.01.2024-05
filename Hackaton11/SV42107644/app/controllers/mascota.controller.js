const db = require("../models");
const Mascota = db.mascota;

exports.create = (req, res) => {
    if (!req.body.nombre) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const mascota = {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        peso: req.body.peso,
        idEspecie: req.body.idEspecie,
        idRaza: req.body.idRaza,
        idColor: req.body.idColor,
        idPropietario: req.body.idPropietario,
        activo: req.body.activo || true
    };

    Mascota.create(mascota)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la mascota."
            });
        });
};

exports.findAll = (req, res) => {
    Mascota.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las mascotas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Mascota.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una mascota con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar la mascota con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Mascota.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mascota actualizada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la mascota con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la mascota con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Mascota.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mascota eliminada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la mascota con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `No se pudo eliminar la mascota con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Mascota.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Mascotas fueron eliminadas con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las mascotas."
            });
        });
};

exports.addVacunas = async (req, res) => {
    const id = req.params.id;

    try {
        const mascota = await Mascota.findByPk(id);

        if (!mascota) {
            return res.status(404).send({
                message: `No se encontró una mascota con el id ${id}.`
            });
        }

        const vacunasIds = req.body.vacunas;

        await mascota.addVacunas(vacunasIds);

        res.send({
            message: "Vacunas asociadas a la mascota con éxito."
        });
    } catch (err) {
        res.status(500).send({
            message: `Error al asociar vacunas a la mascota con el id ${id}.`
        });
    }
};

exports.removeVacunas = async (req, res) => {
    const id = req.params.id;

    try {
        const mascota = await Mascota.findByPk(id);

        if (!mascota) {
            return res.status(404).send({
                message: `No se encontró una mascota con el id ${id}.`
            });
        }

        const vacunasIds = req.body.vacunas;

        await mascota.removeVacunas(vacunasIds);

        res.send({
            message: "Vacunas eliminadas de la mascota con éxito."
        });
    } catch (err) {
        res.status(500).send({
            message: `Error al eliminar vacunas de la mascota con el id ${id}.`
        });
    }
};