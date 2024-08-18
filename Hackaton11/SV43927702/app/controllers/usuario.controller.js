const db = require("../models");
const Usuarios = db.usuario;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const usuarios= {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        activo: true
    };
    Usuarios.create(usuarios).then(data => {
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
    const username = req.query.username;
    console.log(username)
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    console.log(condition);
    Usuarios.findAll({
    
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

    Usuarios.findByPk(id)
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

    Usuarios.update(req.body, {
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

    Usuarios.destroy({
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
    Usuarios.destroy({
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