module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },{
        tableName: 'usuario',
        timestamps: false,
    });
    return Usuario;
}