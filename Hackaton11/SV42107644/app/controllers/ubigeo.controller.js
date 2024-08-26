const db = require("../models");
const Ubigeo = db.ubigeo;

exports.create = (req, res) => {
    if (!req.body.ubigeo) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
    }

    const ubigeo = {
        ubigeo: req.body.ubigeo,
        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        activo: req.body.activo || true
    };

    Ubigeo.create(ubigeo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el Ubigeo."
            });
        });
};

exports.findAll = (req, res) => {
    Ubigeo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los Ubigeos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Ubigeo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró un Ubigeo con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al recuperar el Ubigeo con el id ${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Ubigeo.update(req.body, {
        where: { ubigeo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ubigeo actualizado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el Ubigeo con el id ${id}. Puede que no se haya encontrado o que req.body esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar el Ubigeo con el id ${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Ubigeo.destroy({
        where: { ubigeo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ubigeo eliminado con éxito."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Ubigeo con el id ${id}. Puede que no se haya encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `No se pudo eliminar el Ubigeo con el id ${id}.`
            });
        });
};

exports.deleteAll = (req, res) => {
    Ubigeo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Ubigeos fueron eliminados con éxito.` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar todos los Ubigeos."
            });
        });
};
