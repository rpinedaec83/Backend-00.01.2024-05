const mongoose = require('../common/services/mongoose.service').mongoose;
const crypto = require('crypto');
const UserModel = require('../models/user.model');

exports.createUser = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
    req.body.password = salt + '$' + hash;
    req.body.permissionLevel = 1; // Default permission level
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({ id: result._id });
        });
};

exports.listUsers = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = req.query.page && Number.isInteger(parseInt(req.query.page)) ? parseInt(req.query.page) : 0;
    UserModel.listUsers(limit, page)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getUserById = (req, res) => {
    const userId = req.params.userId;
   if (mongoose.Types.ObjectId.isValid(userId)) {
        UserModel.findUserById(userId)
            .then((result) => {
                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({ message: "User not found" });
                }
            })
            .catch((err) => {
                res.status(500).send({ message: err.message });
            });
    } else {
        res.status(400).send({ message: "Invalid User ID format" });
    }
};

exports.updateUserById = (req, res) => {
    if (req.body.password) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
        req.body.password = salt + '$' + hash;
    }
    UserModel.updateUserById(req.params.userId, req.body)
    .then(() => {
        res.status(204).send({});
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteUserById = (req, res) => {
    UserModel.deleteUserById(req.params.userId)
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => res.status(500).send({ message: err.message }));
};
