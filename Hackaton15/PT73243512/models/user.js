module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      oauth_id: DataTypes.STRING,
      token_acceso: DataTypes.TEXT
    });
    return User;
  };
  