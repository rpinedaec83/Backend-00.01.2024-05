module.exports = (sequelize, DataType) => {
    const Propietario = sequelize.define("propietario", {
        nombres: {
            type: DataType.STRING
        },
        apellidos: {
            type: DataType.STRING
        },
        telefono: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        },
        ubigeo: {
            type: DataType.STRING
        },
        nacionalidad: {
            type: DataType.STRING
        }
    });

    return Propietario;
};