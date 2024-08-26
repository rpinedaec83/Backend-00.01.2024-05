module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define("color", {
        descripcion: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Color;
};