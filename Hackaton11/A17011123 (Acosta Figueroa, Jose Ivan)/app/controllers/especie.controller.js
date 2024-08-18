const db = require("../models");
const Especie = db.especie;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const especie = {
        descripcion: req.body.descripcion,
        usuarioCreacion: req.body.usuarioCreacion,
        activo: req.body.activo || 1,
    };

    Especie.create(especie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Especie."
            });
        });
};

exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Especie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving especies."
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
                    message: `Cannot find Especie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Especie with id=" + id
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
                    message: "Especie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Especie with id=${id}. Maybe Especie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Especie with id=" + id
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
                    message: "Especie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Especie with id=${id}. Maybe Especie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Especie with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Especie.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Especies were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all especies."
            });
        });
};
