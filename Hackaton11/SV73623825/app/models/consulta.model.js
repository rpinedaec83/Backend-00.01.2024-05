module.exports = (sequelize, DataType) => {
    const Consulta = sequelize.define("consulta", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        mascotaId:{
            type: DataType.INTEGER,
            allowNull:false,
            references: {
                model: 'mascota',
                key: 'id'
            }
        },
        veterinarioId:{
            type: DataType.INTEGER,
            allowNull:false,
            references: {
                model: 'veterinarios',
                key: 'id'
            }
        },
        fechaConsulta: {
            type: DataType.STRING
        },
        descripcion: {
            type: DataType.STRING
        }
    });

    return Consulta;
};
