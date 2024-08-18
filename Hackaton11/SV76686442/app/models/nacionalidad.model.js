module.exports=(sequelize, DataType)=>{
    const Nacionalidad= sequelize.define("nacionalidad",{
        descripcion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        }
    });

    return Nacionalidad;
}