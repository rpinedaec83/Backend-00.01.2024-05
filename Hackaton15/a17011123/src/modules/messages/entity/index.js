import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db/index.js'; 

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
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

export default Message;
