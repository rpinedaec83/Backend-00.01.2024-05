module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      nombre: DataTypes.STRING,
      email: DataTypes.STRING,
      oauth_id: DataTypes.STRING,
    });
    User.associate = (models) => {
      User.hasMany(models.Package, { as: 'paquetes_enviados', foreignKey: 'remitente_id' });
      User.hasMany(models.Package, { as: 'paquetes_recibidos', foreignKey: 'destinatario_id' });
    };
    return User;
  };
