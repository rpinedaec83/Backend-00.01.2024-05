const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const bcrypt = require('bcrypt');

// Definición del modelo Usuario
const User = sequelize.define('User', {
  // ID del usuario (generado automáticamente por Sequelize)
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Nombre completo del usuario
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Correo electrónico del usuario
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  // Contraseña (hashed)
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Método de autenticación (local, google, github)
  authMethod: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'local',
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },

  // ID de GitHub
  githubId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  // Fecha de creación (generada automáticamente)
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  // Fecha de actualización (generada automáticamente)
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Hooks para hashear la contraseña antes de guardar el usuario
User.beforeCreate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.beforeUpdate(async (user) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

// Método para comparar la contraseña ingresada con la almacenada
User.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
