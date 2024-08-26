module.exports = (sequelize, DataType) => {
    const Vacunas = sequelize.define("vacunas", {
        descripcion: {
            type: DataType.STRING,
            unique: true,
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

    return Vacunas;
};
