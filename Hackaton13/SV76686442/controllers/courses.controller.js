const CourseModel = require('../models/course.model');

exports.createCourse = (req, res) => {
    CourseModel.createCourse(req.body)
        .then((result) => {
            res.status(201).send({ id: result._id });
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.listCourses = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = req.query.page && Number.isInteger(parseInt(req.query.page)) ? parseInt(req.query.page) : 0;
    CourseModel.listCourses(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.getCourseById = (req, res) => {
    CourseModel.findCourseById(req.params.courseId)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.updateCourseById = (req, res) => {
    CourseModel.updateCourseById(req.params.courseId, req.body)
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteCourseById = (req, res) => {
    CourseModel.deleteCourseById(req.params.courseId)
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => res.status(500).send({ message: err.message }));
};
