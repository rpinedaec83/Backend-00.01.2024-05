module.exports=(sequelize,DataType) =>  {
    const color = sequelize.define('color',{
        descripcion : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return color;
};