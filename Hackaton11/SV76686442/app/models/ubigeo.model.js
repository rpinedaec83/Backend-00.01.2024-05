module.exports = (sequelize, DataType) => {
    const Ubigeo = sequelize.define("ubigeo", {
        ubigeo: {
            type: DataType.STRING,
            primaryKey: true,
        },
        departamento: {
            type: DataType.STRING
        },
        provincia: {
            type: DataType.STRING
        },
        distrito: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Ubigeo;
};
