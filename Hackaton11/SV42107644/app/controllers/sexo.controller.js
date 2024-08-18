const db = require("../models");
const Sexo = db.sexo;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const sexo = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Sexo.create(sexo)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el sexo."
            });
        });
};

exports.findAll = (req, res) => {
    Sexo.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los sexos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Sexo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró un sexo con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar el sexo con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Sexo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sexo actualizado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el sexo con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar el sexo con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Sexo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sexo eliminado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el sexo con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar el sexo con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Sexo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Sexos fueron eliminados con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todos los sexos."
            });
        });
};
