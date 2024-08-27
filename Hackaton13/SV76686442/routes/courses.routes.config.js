const CoursesController = require('../controllers/courses.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const AuthMiddleware = require('../common/middlewares/auth.middleware');
const Variables= require('../common/config/env.config');
const ADMIN=Variables.permissionLevels.ADMIN;

module.exports.routesConfig = function (app) {
    app.post('/courses', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CoursesController.createCourse]);
    app.get('/courses', CoursesController.listCourses);
    app.get('/courses/:courseId', CoursesController.getCourseById);
    app.patch('/courses/:courseId', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CoursesController.updateCourseById]);
    app.delete('/courses/:courseId', [AuthMiddleware.validJWTNeeded,PermissionMiddleware.permissionLevelRequired(ADMIN),CoursesController.deleteCourseById]);
};
