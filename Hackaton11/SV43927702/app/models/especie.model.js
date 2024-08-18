

module.exports=(sequelize,DataType) =>  {
    const especie = sequelize.define('especie',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return especie;
};