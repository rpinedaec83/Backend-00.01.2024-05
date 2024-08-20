const db = require("../models");
const Mascota = db.Mascota;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const mascota= {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        peso: req.body.peso,
        colorId: req.body.colorId,
        especieId: req.body.especieId,
        razaId: req.body.razaId,
        sexoId: req.body.sexoId,
        propietarioId: req.body.propietarioId
      
    };
    Mascota.create(mascota).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
    console.log(condition);
    Mascota.findAll({
    
    }, { where: condition })
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

    Mascota.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find usuario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Usuario with id=" + id
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
                    message: "Usuario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
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
                    message: "Usuario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Usuario with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Usuario with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Mascota.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Usuarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Usuarios."
        });
      });
};