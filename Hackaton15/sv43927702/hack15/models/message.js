module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      contenido: DataTypes.TEXT,
    });
    Message.associate = (models) => {
      Message.belongsTo(models.Package);
    };
    return Message;
  };
  