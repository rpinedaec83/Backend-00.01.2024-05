module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
      latitud: DataTypes.FLOAT,
      longitud: DataTypes.FLOAT,
      ubicacion_descripcion: DataTypes.STRING,
    });
    Location.associate = (models) => {
      Location.belongsTo(models.Package);
    };
    return Location;
  };
  