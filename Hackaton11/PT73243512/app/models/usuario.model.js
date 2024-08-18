module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("usuario", {
        username: {
            type: DataType.STRING
        },
        pasword: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        }
    });

    return Usuario;
};