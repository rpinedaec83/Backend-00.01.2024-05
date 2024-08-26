module.exports = (sequelize, DataTypes) => {
    const Especie = sequelize.define("especie", {
        descripcion: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Especie;
};