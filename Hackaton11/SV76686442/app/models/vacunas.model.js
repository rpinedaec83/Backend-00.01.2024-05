module.exports = (sequelize, DataType) => {
    const Vacunas = sequelize.define("vacunas", {
        descripcion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Vacunas;
};
