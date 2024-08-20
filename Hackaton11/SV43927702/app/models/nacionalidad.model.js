module.exports=(sequelize,DataType) =>  {
    const nacionalidad = sequelize.define('nacionalidad',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return nacionalidad;
};