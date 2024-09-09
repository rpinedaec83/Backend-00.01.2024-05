module.exports = (sequelize, DataTypes) => {
    const Package = sequelize.define('Package', {
      peso: DataTypes.FLOAT,
      dimensiones: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      estado: DataTypes.STRING,
    });
    Package.associate = (models) => {
      Package.hasMany(models.Message);
      Package.hasMany(models.Location);
    };
    return Package;
  };
  