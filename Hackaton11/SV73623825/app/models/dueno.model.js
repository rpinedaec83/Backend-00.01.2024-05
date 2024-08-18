module.exports = (sequelize, DataType) => {
    const Dueno = sequelize.define("duenios", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        nombre: {
            type: DataType.STRING
        },
        telefono: {
            type: DataType.STRING(11)
        },
        correo: {
            type: DataType.STRING
        },
        direccion: {
            type: DataType.STRING
        }
    });

    return Dueno;
};
