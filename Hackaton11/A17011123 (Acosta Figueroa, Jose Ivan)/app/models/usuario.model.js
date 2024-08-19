module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("usuario", {
        username: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        activo: {
            type: DataType.BOOLEAN,
            defaultValue: false
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

    return Usuario;
};
