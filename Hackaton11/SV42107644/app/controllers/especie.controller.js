const db = require("../models");
const Especie = db.especie;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const especie = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Especie.create(especie)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la especie."
            });
        });
};

exports.findAll = (req, res) => {
    Especie.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las especies."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Especie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una especie con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar la especie con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Especie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Especie actualizada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la especie con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la especie con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Especie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Especie eliminada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la especie con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la especie con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Especie.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Especies fueron eliminadas con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las especies."
            });
        });
};
