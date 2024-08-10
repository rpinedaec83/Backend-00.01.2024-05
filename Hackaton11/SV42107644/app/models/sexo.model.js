module.exports = (sequelize, DataTypes) => {
    const Sexo = sequelize.define("sexo", {
        descripcion: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Sexo;
};