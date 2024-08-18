module.exports=(sequelize,DataType) =>  {
    const propietario = sequelize.define('propietario',{
        nombres : {
            type: DataType.STRING
            
        },
        apellidos : {
            type: DataType.STRING
            
        },
        telefono : {
            type: DataType.STRING
            
        },
        email : {
            type: DataType.STRING
            
        },
        activo : {
            type: DataType.BOOLEAN
         
        }
        
    });
    return propietario;
};