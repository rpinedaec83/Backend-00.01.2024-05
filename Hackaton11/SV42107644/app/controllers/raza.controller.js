const db = require("../models");
const Raza = db.raza;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const raza = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Raza.create(raza)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la raza."
            });
        });
};

exports.findAll = (req, res) => {
    Raza.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las razas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Raza.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una raza con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar la raza con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Raza.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Raza actualizada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la raza con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la raza con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Raza.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Raza eliminada con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la raza con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la raza con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Raza.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Razas fueron eliminadas con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todas las razas."
            });
        });
};
