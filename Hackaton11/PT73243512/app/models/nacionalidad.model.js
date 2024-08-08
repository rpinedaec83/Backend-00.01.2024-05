module.exports = (sequelize, DataType) => {
    const Nacionalidad = sequelize.define("nacionalidad", {
        descripcion: {
            type: DataType.STRING
        }
    });

    return Nacionalidad;
};