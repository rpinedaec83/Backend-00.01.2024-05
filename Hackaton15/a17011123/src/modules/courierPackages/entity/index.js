import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db/index.js'; 

const CourierPackage = sequelize.define('CourierPackage', {
  trackingNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true, // Asegura que no esté vacío
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Asegura que no esté vacío
    },
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Asegura que no esté vacío
    },
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Asegura que no esté vacío
    },
  },
}, {
  timestamps: true, // Habilita createdAt y updatedAt
});

export default CourierPackage;
