const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Propietario = require('./Propietario.js')(sequelize, Sequelize);
db.Usuario = require('./Usuario.js')(sequelize, Sequelize);
db.Color = require('./Color.js')(sequelize, Sequelize);
db.Nacionalidad = require('./Nacionalidad.js')(sequelize, Sequelize);
db.Raza = require('./Raza.js')(sequelize, Sequelize);
db.Sexo = require('./Sexo.js')(sequelize, Sequelize);
db.Ubigeo = require('./Ubigeo.js')(sequelize, Sequelize);
db.Vacunas = require('./Vacunas.js')(sequelize, Sequelize);
db.Mascota = require('./Mascota.js')(sequelize, Sequelize);

module.exports= db;

