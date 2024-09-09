import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db/index.js'; 

const Location = sequelize.define('Location', {
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  packageId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'CourierPackages',  
      key: 'id',
    },
  },
});

export default Location;
