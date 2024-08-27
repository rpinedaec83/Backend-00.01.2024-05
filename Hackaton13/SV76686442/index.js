const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());


const AuthRouter = require('./routes/auth.routes.config');
const UsersRouter = require('./routes/users.routes.config');
const CoursesRouter = require('./routes/courses.routes.config');
const OrdersRouter = require('./routes/orders.routes.config');
const CouponsRouter = require('./routes/coupons.routes.config');

AuthRouter.routesConfig(app);
UsersRouter.routesConfig(app);
CoursesRouter.routesConfig(app);
OrdersRouter.routesConfig(app);
CouponsRouter.routesConfig(app);

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
