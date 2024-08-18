const db = require("../models");
const Especie = db.especie;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const especie= {
        descripcion: req.body.descripcion,
        activo: true
    };
    Especie.create(especie).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Especie."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;
    console.log(condition);
    Especie.findAll({
    
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

    Especie.findByPk(id)
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

    Especie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Color was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Color with id=${id}. Maybe Usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Color with id=" + id
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
    Especie.destroy({
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