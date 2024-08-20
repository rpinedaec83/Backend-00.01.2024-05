const db = require("../models");
const  Veterinario = db.veterinario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const veterinario = {
        nombre: req.body.nombre,
        especialidad: req.body.especialidad
    };
    Veterinario.create(veterinario).then(data => {
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
    Veterinario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving veterinario."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Veterinario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find veterinario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving veterinario with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Veterinario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "veterinario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update veterinario with id=${id}. Maybe veterinario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating veterinario with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Veterinario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dueno was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete veterinario with id=${id}. Maybe veterinario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete veterinario with id=" + id
            });
        });
};