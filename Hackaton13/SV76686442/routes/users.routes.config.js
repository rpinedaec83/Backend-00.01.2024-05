const UsersController = require('../controllers/users.controller');
const AuthMiddleware = require('../common/middlewares/auth.middleware');

module.exports.routesConfig = function (app) {
    app.post('/users', UsersController.createUser);
    app.get('/users', UsersController.listUsers);
    app.get('/users/:userId', UsersController.getUserById);
    app.patch('/users/:userId', AuthMiddleware.validJWTNeeded, UsersController.updateUserById);
    app.delete('/users/:userId', AuthMiddleware.validJWTNeeded, UsersController.deleteUserById);
};
