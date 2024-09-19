const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect, admin } = require('../middlewares/authMiddleware');

// Rutas públicas
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

// Rutas protegidas para administradores
router.post('/', protect, admin, courseController.createCourse);
router.put('/:id', protect, admin, courseController.updateCourse);
router.delete('/:id', protect, admin, courseController.deleteCourse);

module.exports = router;
