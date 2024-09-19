const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Definición del modelo Curso
const Course = sequelize.define('Course', {
  // ID del curso (generado automáticamente)
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Título del curso
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Descripción del curso
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Precio del curso
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  // URL del ebook asociado (si aplica)
  ebookUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Fecha de creación
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  // Fecha de actualización
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Course;
