module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Location = sequelize.define('Location', {
      latitud: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false
      },
      longitud: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false
    });
  
    
    Location.associate = (models) => {
     
      Location.belongsTo(models.Package, {
        foreignKey: 'paquete_id',
        as: 'paquete'
      });
    };
  
    return Location;
  };
  