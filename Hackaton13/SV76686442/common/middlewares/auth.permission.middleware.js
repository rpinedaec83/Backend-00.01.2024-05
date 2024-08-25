const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/env.config').jwt_secret;
const ADMIN_PERMISSION = require('../config/env.config')['permissionLevels']['ADMIN'];

exports.permissionLevelRequired = (level) => {
    return (req, res, next) => {
        try {
            const user = req.jwt;
            if (user.permissionLevel >= level) {
                return next();
            } else {
                return res.status(403).send({ error: 'Insufficient permissions' });
            }

        } catch (err) {
            return res.status(403).send({ error: 'Invalid token' });
        }

    };
};
exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) => {
    let user_permission_level = parseInt(req.jwt.permissionLevel);
    let userId = req.jwt.userId;
    if (req.params && req.params.userId && userId === req.params.userId) {
        return next();
    } else {
        if (user_permission_level & ADMIN_PERMISSION) {
            return next();
        } else {
            return res.status(403).send();
        }
    }

};

exports.sameUserCantDoThisAction = (req, res, next) => {
    let userId = req.jwt.userId;
    if (req.params.userId !== userId) {
        return next();
    } else {
        return res.status(400).send();
    }
};
