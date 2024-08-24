const asyncHandler = require('express-async-handler');
const Course = require('../models/courseModel');

// Obtener todos los cursos
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});

// Obtener curso por ID
const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        res.json(course);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// Crear un nuevo curso
const createCourse = asyncHandler(async (req, res) => {
    const { name, description, img, cover, price } = req.body;

    const course = new Course({
        name,
        description,
        img,
        cover,
        price,
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
});

// Actualizar un curso
const updateCourse = asyncHandler(async (req, res) => {
    const { name, description, img, cover, price } = req.body;

    const course = await Course.findById(req.params.id);

    if (course) {
        course.name = name || course.name;
        course.description = description || course.description;
        course.img = img || course.img;
        course.cover = cover || course.cover;
        course.price = price || course.price;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// Eliminar un curso
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        await course.remove();
        res.json({ message: 'Course removed' });
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
