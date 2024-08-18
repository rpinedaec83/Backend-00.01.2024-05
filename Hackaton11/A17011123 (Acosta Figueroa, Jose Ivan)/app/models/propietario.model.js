module.exports = (sequelize, DataType) => {
    const Propietario = sequelize.define("propietario", {
        nombres: {
            type: DataType.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataType.STRING,
            allowNull: false
        },
        telefono: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        ubigeo: {
            type: DataType.STRING(6),
            allowNull: false
        },
        idNacionalidad: {
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

    return Propietario;
};
