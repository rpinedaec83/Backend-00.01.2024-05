module.exports = (sequelize, DataType) => {
    const Veterinario = sequelize.define("veterinarios", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        nombre: {
            type: DataType.STRING
        },
        especialidad: {
            type: DataType.STRING
        }
    });

    return Veterinario;
};
