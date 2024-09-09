const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,   
    port: process.env.DB_PORT || 3306,  // Asignar el puerto desde el archivo .env, con un valor predeterminado (3306)
    dialect: 'mysql',            
    logging: false,              
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida.'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;
