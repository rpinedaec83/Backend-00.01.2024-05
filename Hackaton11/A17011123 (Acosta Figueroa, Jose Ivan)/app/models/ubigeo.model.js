module.exports = (sequelize, DataType) => {
    const Ubigeo = sequelize.define("ubigeo", {
        ubigeo: {
            type: DataType.STRING(6),
            primaryKey: true
        },
        departamento: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        provincia: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        distrito: {
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

    return Ubigeo;
};
