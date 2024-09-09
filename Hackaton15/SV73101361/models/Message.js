const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Package = require('./Package');

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
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
  packageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Package,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

User.hasMany(Message, { foreignKey: 'userId' });
Message.belongsTo(User, { foreignKey: 'userId' });

Package.hasMany(Message, { foreignKey: 'packageId' });
Message.belongsTo(Package, { foreignKey: 'packageId' });

module.exports = Message;
