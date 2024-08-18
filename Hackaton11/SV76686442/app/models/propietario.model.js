module.exports=(sequelize, DataType)=>{
    const Propietario= sequelize.define("propietario",{
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
        activo: {
            type: DataType.BOOLEAN
        },
        ubigeoId:{
            type: DataType.STRING,
            references:{
                model:'ubigeos',
                key:'ubigeo'
            }
        }
    });

    return Propietario;
}