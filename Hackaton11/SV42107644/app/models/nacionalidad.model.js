module.exports = (sequelize, DataTypes) => {
    const Nacionalidad = sequelize.define("nacionalidad", {
        descripcion: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Nacionalidad;
};