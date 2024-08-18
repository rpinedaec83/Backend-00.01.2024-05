module.exports = (sequelize, DataType) => {
    const Mascota = sequelize.define("mascota", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        nombre: {
            type: DataType.STRING
        },
        raza: {
            type: DataType.STRING
        },
        color: {
            type: DataType.STRING
        },
        edad: {
            type: DataType.INTEGER
        },
        tipo: {
            type: DataType.STRING
        },
        peso: {
            type: DataType.STRING
        },
        duenoId:{
            type: DataType.INTEGER,
            allowNull:false,
            references: {
                model: 'duenios',
                key: 'id'
            }
        }
    });

    return Mascota;
};
