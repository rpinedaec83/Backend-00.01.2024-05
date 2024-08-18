const db = require("../models");
const Dueno = db.dueno;
const  Mascota = db.mascota;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if ((!req.body.nombre)||(!req.body.telefono) ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const dueno = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion
    };
    Dueno.create(dueno).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the nombre o telefono."
            });
        });
};



exports.findAll = (req, res) => {
    Dueno.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Dueno.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Dueno with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Dueno with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Dueno.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dueno was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Dueno with id=${id}. Maybe Dueno was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Dueno with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Dueno.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dueno was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Dueno with id=${id}. Maybe Dueno was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Dueno with id=" + id
            });
        });
};