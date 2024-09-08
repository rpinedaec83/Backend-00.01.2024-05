module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    
    const Package = sequelize.define('Package', {
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Enviado'
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false 
    });
  
    
    Package.associate = (models) => {
   
      Package.belongsTo(models.User, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });
  
      Package.hasMany(models.Message, {
        foreignKey: 'paquete_id',
        as: 'mensajes'
      });
  
      Package.hasMany(models.Location, {
        foreignKey: 'paquete_id',
        as: 'ubicaciones'
      });
    };
  
    return Package;
  };
  