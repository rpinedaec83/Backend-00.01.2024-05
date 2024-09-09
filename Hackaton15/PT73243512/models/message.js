module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha_envio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false
  });

  Message.associate = (models) => {
    Message.belongsTo(models.Package, { foreignKey: 'paquete_id', as: 'paquete' });
    Message.belongsTo(models.User, { foreignKey: 'usuario_id', as: 'usuario' });
  };

  return Message;
};
