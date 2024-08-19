const db = require("../models");
const Raza = db.raza;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const raza = {
        descripcion: req.body.descripcion,
        usuarioCreacion: req.body.usuarioCreacion,
        activo: req.body.activo || 1,
    };

    Raza.create(raza)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Raza."
            });
        });
};

exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Raza.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving razas."
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
                    message: `Cannot find Raza with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Raza with id=" + id
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
                    message: "Raza was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Raza with id=${id}. Maybe Raza was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Raza with id=" + id
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
                    message: "Raza was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Raza with id=${id}. Maybe Raza was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Raza with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Raza.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Razas were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all razas."
            });
        });
};
