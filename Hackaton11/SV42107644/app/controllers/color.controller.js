const db = require("../models");
const Color = db.color;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const color = {
        descripcion: req.body.descripcion,
        activo: req.body.activo || true
    };

    Color.create(color)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el color."
            });
        });
};

exports.findAll = (req, res) => {
    Color.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los colores."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Color.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró un color con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar el color con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Color.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Color actualizado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el color con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar el color con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Color.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Color eliminado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el color con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar el color con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Color.destroy({
        where: {},
        truncate: false
    })
        .then(nums => res.send({ message: `${nums} Colores fueron eliminados con éxito.` }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todos los colores."
            });
        });
};
