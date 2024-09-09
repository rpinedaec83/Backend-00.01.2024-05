const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: true, // Puede ser null si el usuario se autentica con GitHub
  },
  githubId: {
    type: DataTypes.STRING,
    allowNull: true, // Puede ser null si el usuario se autentica con Google
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,  // Será null si el usuario usa OAuth
  },
}, {
  timestamps: true,
});

module.exports = User;
