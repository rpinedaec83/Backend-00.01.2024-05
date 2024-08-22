const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AuthorizationController = require('./controllers/authorization.controller');


exports.routesConfig = function (app) {
    app.get('/auth', (req, res)=>{
        res.send("desde el /auth");
    })
}