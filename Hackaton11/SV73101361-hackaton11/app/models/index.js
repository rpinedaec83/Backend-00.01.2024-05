const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Propietario = require('./Propietario.js')(sequelize, Sequelize);
db.Usuario = require('./Usuario.js')(sequelize, Sequelize);

module.exports= db;

