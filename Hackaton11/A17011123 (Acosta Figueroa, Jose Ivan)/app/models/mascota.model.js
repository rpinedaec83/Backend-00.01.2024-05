module.exports = (sequelize, DataType) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: DataType.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: DataType.DATE,
            allowNull: true
        },
        peso: {
            type: DataType.DECIMAL(5, 2),
            allowNull: false
        },
        idEspecie: {
            type: DataType.INTEGER,
            allowNull: false
        },
        idRaza: {
            type: DataType.INTEGER,
            allowNull: false
        },
        idSexo: {
            type: DataType.INTEGER,
            allowNull: false
        },
        idColor: {
            type: DataType.INTEGER,
            allowNull: false
        },
        idPropietario: {
            type: DataType.INTEGER,
            allowNull: false
        },
        activo: {
            type: DataType.BOOLEAN,
            defaultValue: true
        },
        usuarioCreacion: {
            type: DataType.INTEGER,
            allowNull: false
        },
        fechaCreacion: {
            type: DataType.DATE,
            defaultValue: DataType.NOW
        },
        usuarioModificacion: {
            type: DataType.INTEGER,
            allowNull: true
        },
        fechaModificacion: {
            type: DataType.DATE,
            allowNull: true
        }
    });

    return Mascota;
};
