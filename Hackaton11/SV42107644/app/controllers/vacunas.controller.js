const db = require("../models");
const Vacunas = db.vacunas;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const vacunas = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Vacunas.create(vacunas)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la vacuna."
            });
        });
};

exports.findAll = (req, res) => {
    Vacunas.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las vacunas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Vacunas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una vacuna con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar la vacuna con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Vacunas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacuna actualizada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la vacuna con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la vacuna con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Vacunas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacuna eliminada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la vacuna con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la vacuna con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Vacunas.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Vacunas fueron eliminadas con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las vacunas."
            });
        });
};
