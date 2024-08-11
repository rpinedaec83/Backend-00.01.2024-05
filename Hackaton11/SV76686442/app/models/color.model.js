module.exports = (sequelize, DataType) => {
    const Color = sequelize.define("color", {
        descripcion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Color;
};
