module.exports = (sequelize, DataTypes) => {
    const Ubigeo = sequelize.define('Ubigeo', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      departamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distrito: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'ubigeo',
      timestamps: false,
    });
  
    return Ubigeo;
  };
  