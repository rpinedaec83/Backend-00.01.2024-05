const AuthController = require('../controllers/auth.controller.js');
const AuthMiddleware = require('../common/middlewares/auth.middleware');
const VerifyMiddleware = require('../common/middlewares/verify.user.middleware.js');

module.exports.routesConfig = function (app) {
    app.post('/login', [VerifyMiddleware.hasAuthValidFields,VerifyMiddleware.isPasswordAndUserMatch,AuthController.login]);
    app.post('/refresh_token', [AuthMiddleware.validJWTNeeded, AuthMiddleware.verifyRefreshBodyField, AuthMiddleware.validRefreshNeeded], AuthController.refresh_token);
};
