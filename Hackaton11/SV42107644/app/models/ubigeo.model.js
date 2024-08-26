module.exports = (sequelize, DataTypes) => {
    const Ubigeo = sequelize.define("ubigeo", {
        ubigeo: {
            primaryKey: true,  // Definir como clave primaria
            allowNull: false,  
            type: DataTypes.STRING(6),
        },
        departamento: {
            type: DataTypes.STRING,
        },
        provincia: {
            type: DataTypes.STRING,
        },
        distrito: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.BOOLEAN
        }
    });

    return Ubigeo;
};