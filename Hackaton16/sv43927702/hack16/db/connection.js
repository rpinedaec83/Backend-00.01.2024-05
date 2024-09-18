const mysql = require('mysql2/promise');
const config = require('../config/config');

const connection = mysql.createPool({
    host: config.databaseHost,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseName,
});

module.exports = connection;
