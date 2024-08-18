module.exports = (sequelize, DataTypes) => {
  const Nacionalidad = sequelize.define(
    "Nacionalidad",
    {
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
          model: "Usuario",
          key: "id",
        },
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      usuarioModificacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Usuario",
          key: "id",
        },
      },
      fechaModificacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "nacionalidad",
      timestamps: false,
    }
  );
  return Nacionalidad;
};
