const db = require("../models");
const  Mascota = db.mascota;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const mascota = {
        nombre: req.body.nombre,
        raza: req.body.raza,
        color: req.body.color,
        edad: req.body.edad,
        tipo: req.body.tipo,
        peso: req.body.peso,
        duenoId: req.body.duenoId
    };
    Mascota.create(mascota).then(data => {
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
    Mascota.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving mascota."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Mascota.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find mascota with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving mascota with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Mascota.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mascota was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Mascota with id=${id}. Maybe Mascota was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Mascota with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Mascota.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dueno was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Mascota with id=${id}. Maybe Mascota was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Mascota with id=" + id
            });
        });
};