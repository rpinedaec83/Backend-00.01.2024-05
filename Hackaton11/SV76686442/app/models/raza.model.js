module.exports = (sequelize, DataType) => {
    const Raza = sequelize.define("raza", {
        descripcion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Raza;
};
