const db = require("../models");
const Nacionalidad = db.nacionalidad;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const nacionalidad = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Nacionalidad.create(nacionalidad)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la nacionalidad."
            });
        });
};

exports.findAll = (req, res) => {
    Nacionalidad.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las nacionalidades."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Nacionalidad.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una nacionalidad con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar la nacionalidad con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Nacionalidad.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Nacionalidad actualizada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la nacionalidad con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la nacionalidad con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Nacionalidad.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Nacionalidad eliminada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la nacionalidad con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la nacionalidad con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Nacionalidad.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Nacionalidades fueron eliminadas con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las nacionalidades."
            });
        });
};
