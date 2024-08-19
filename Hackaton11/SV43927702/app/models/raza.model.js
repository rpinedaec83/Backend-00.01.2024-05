module.exports=(sequelize,DataType) =>  {
    const raza = sequelize.define('raza',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return raza;
};