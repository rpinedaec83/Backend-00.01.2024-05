module.exports = (sequelize, DataTypes) => {
    const Vacunas = sequelize.define("vacunas", {
        descripcion: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Vacunas;
};