import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || '',
        dialect: 'mysql',
        port: Number(process.env.DB_PORT) || 3306,
        logging: false,
    }
);

export default sequelize;