const db = require("../models");
const Propietario = db.propietario;

exports.create = (req, res) => {
    if (!req.body.nombres || !req.body.apellidos) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const propietario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        email: req.body.email,
        ubigeo: req.body.ubigeo,
        activo: req.body.activo || true
    };

    Propietario.create(propietario)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el propietario."
            });
        });
};

exports.findAll = (req, res) => {
    Propietario.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los propietarios."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Propietario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró un propietario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar el propietario con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Propietario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Propietario actualizado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el propietario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar el propietario con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Propietario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Propietario eliminado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el propietario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `No se pudo eliminar el propietario con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Propietario.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Propietarios fueron eliminados con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todos los propietarios."
            });
        });
};
