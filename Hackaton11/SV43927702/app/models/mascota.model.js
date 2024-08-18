module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define('Mascota', {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        peso: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        }
    });

    return Mascota;
};