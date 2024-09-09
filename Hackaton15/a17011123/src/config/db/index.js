import { Sequelize } from "sequelize";
//TODO: Corregir
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DATABASE_DB_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  dialect: "mysql",
});

export default sequelize;
