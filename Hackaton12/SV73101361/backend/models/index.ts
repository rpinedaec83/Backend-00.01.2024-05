import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config';
import ShoppingListModel from './shoppingList.model';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
});

const db = {
    sequelize,
    Sequelize,
    ShoppingList: ShoppingListModel(sequelize)
};

export default db;
