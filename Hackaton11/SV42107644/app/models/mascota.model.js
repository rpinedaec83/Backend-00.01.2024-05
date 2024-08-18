module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        peso: {
            type: DataTypes.DECIMAL(5,2),
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Mascota;
};