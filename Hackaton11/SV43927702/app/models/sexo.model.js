module.exports=(sequelize,DataType) =>  {
    const sexo = sequelize.define('sexo',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return sexo;
};