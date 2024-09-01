import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,            // Nombre de la base de datos
  process.env.DB_USER as string,            // Usuario de la base de datos
  process.env.DB_PASSWORD as string,        // Contraseña del usuario
  {
    host: process.env.DB_HOST as string,    // Host de la base de datos
    port: Number(process.env.DB_PORT),      // Puerto de la base de datos
    dialect: process.env.DB_DIALECT as 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql', // Dialecto de la base de datos
  }
);

export default sequelize;
