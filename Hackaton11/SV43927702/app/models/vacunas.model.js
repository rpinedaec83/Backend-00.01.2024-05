module.exports=(sequelize,DataType) =>  {
    const vacuna = sequelize.define('vacuna',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return vacuna;
};