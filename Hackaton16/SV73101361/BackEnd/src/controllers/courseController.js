const Course = require('../models/Course');

// Obtener todos los cursos
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los cursos', error: error.message });
  }
};

// Obtener un curso por ID
exports.getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el curso', error: error.message });
  }
};

// Crear un nuevo curso (requiere permisos de administrador)
exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, ebookUrl } = req.body;

    const newCourse = await Course.create({
      title,
      description,
      price,
      ebookUrl,
    });

    res.status(201).json({ message: 'Curso creado exitosamente', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el curso', error: error.message });
  }
};

// Actualizar un curso existente (requiere permisos de administrador)
exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, description, price, ebookUrl } = req.body;

    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    // Actualizar datos
    course.title = title || course.title;
    course.description = description || course.description;
    course.price = price || course.price;
    course.ebookUrl = ebookUrl || course.ebookUrl;
    await course.save();

    res.status(200).json({ message: 'Curso actualizado', course });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el curso', error: error.message });
  }
};

// Eliminar un curso (requiere permisos de administrador)
exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    await course.destroy();

    res.status(200).json({ message: 'Curso eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el curso', error: error.message });
  }
};
