module.exports = (sequelize, DataTypes) => {
    const Propietario = sequelize.define("Propietario", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      usuarioCreacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      usuarioModificacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fechaModificacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: "propietario",
      timestamps: false,
    });
  
    Propietario.associate = (models) => {
      Propietario.belongsTo(models.Ubigeo, {
        as: "ubigeo",
        foreignKey: "ubigeoId",
      });
  
      Propietario.belongsTo(models.Nacionalidad, {
        as: "nacionalidad",
        foreignKey: "nacionalidadId",
      });
  
      Propietario.belongsTo(models.Usuario, {
        as: "creador",
        foreignKey: "usuarioCreacion",
      });
  
      Propietario.belongsTo(models.Usuario, {
        as: "modificador",
        foreignKey: "usuarioModificacion",
      });
    };
  
    return Propietario;
  };
  