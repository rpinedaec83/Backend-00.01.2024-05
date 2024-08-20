
module.exports = (sequelize,DataType) => {
    const usuario = sequelize.define("usuario", {
        username : {
            type: DataType.STRING,
            
        },
        email: {
            type: DataType.STRING,
           
        },
        password: {
            type: DataType.STRING,
            
        }
        
        
    });
    return usuario;
};