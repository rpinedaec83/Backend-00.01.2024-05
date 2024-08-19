module.exports = (sequelize, DataTypes) => {
    const Vacunas = sequelize.define('Vacunas', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      usuarioCreacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'id'
        }
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      usuarioModificacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Usuario',
          key: 'id'
        }
      },
      fechaModificacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: 'vacunas',
      timestamps: false,
    });
  
    return Vacunas;
  };
  