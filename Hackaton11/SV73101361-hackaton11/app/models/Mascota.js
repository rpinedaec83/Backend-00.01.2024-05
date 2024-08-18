module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define('Mascota', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true,
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
      tableName: 'mascota',
      timestamps: false,
    });
  
    Mascota.belongsTo(sequelize.models.Raza, { foreignKey: 'razaId', as: 'raza' });
    Mascota.belongsTo(sequelize.models.Color, { foreignKey: 'colorId', as: 'color' });
    Mascota.belongsTo(sequelize.models.Sexo, { foreignKey: 'sexoId', as: 'sexo' });
  
    return Mascota;
  };
  