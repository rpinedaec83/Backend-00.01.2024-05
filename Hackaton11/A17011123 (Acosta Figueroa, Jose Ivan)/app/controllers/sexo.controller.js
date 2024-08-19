const db = require("../models");
const Sexo = db.sexo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const sexo = {
        descripcion: req.body.descripcion,
        usuarioCreacion: req.body.usuarioCreacion,
        activo: req.body.activo || 1,
    };

    Sexo.create(sexo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sexo."
            });
        });
};

exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Sexo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving sexos."
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
                    message: `Cannot find Sexo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sexo with id=" + id
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
                    message: "Sexo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Sexo with id=${id}. Maybe Sexo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Sexo with id=" + id
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
                    message: "Sexo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sexo with id=${id}. Maybe Sexo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sexo with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Sexo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sexos were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all sexos."
            });
        });
};
