module.exports=(sequelize,DataType) =>  {
    const ubigeo = sequelize.define('ubigeo',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return ubigeo;
};