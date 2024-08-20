const db = require("../models");
const  Consulta = db.consulta;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    const consulta = {
        mascotaId: req.body.mascotaId,
        veterinarioId: req.body.veterinarioId,
        descripcion: req.body.descripcion,
        fechaConsulta: req.body.fechaConsulta
    };
    Consulta.create(consulta).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the nombre"
            });
        });
};


exports.findAll = (req, res) => {
    Consulta.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving consulta."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Consulta.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find consulta with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving consulta with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Consulta.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "consulta was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update consulta with id=${id}. Maybe consulta was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating consulta with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Consulta.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dueno was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete consulta with id=${id}. Maybe consulta was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete consulta with id=" + id
            });
        });
};