const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Package = sequelize.define('Package', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  trackingNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

User.hasMany(Package, { foreignKey: 'userId' });
Package.belongsTo(User, { foreignKey: 'userId' });

module.exports = Package;
