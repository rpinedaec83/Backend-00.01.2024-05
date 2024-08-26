const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// const sequelize = new Sequelize('tutorialdb', 'root', 'pacha2024', {
//     host: 'localhost',
//     dialect: 'mysql', 
//   });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.colors = require("./color.model.js")(sequelize, Sequelize);
db.especies = require("./especie.model.js")(sequelize, Sequelize);
db.mascota = require("./mascota.model.js")(sequelize, Sequelize);
db.nacionalidads = require("./nacionalidad.model.js")(sequelize, Sequelize);
db.propietarios = require("./propietario.model.js")(sequelize, Sequelize);
db.razas = require("./raza.model.js")(sequelize, Sequelize);
db.sexos = require("./sexo.model.js")(sequelize, Sequelize);
db.ubigeos = require("./ubigeo.model.js")(sequelize, Sequelize);
db.vacunas = require("./vacunas.model.js")(sequelize, Sequelize);


db.vacunas.belongsToMany(db.mascota, {
        through: "mascota_vacunas",
        as: "mascota",
        foreignKey: "vacuna_id",
    });

db.mascota.belongsToMany(db.vacunas, {
    through: "mascota_vacunas",
    as: "vacunas",
    foreignKey: "mascota_id",
});


db.razas.hasMany(db.mascota, {as: "mascotas"});
db.mascota.belongsTo(db.razas,{
    foreignKey:"razaId",
    as: "raza",
});

db.especies.hasMany(db.mascota, {as: "mascotas"});
db.mascota.belongsTo(db.especies,{
    foreignKey:"especieId",
    as: "especie",
});

db.sexos.hasMany(db.mascota, {as: "mascotas"});
db.mascota.belongsTo(db.sexos,{
    foreignKey:"sexoId",
    as: "sexo",
});

db.colors.hasMany(db.mascota, {as: "mascotas"});
db.mascota.belongsTo(db.colors,{
    foreignKey:"colorId",
    as: "color",
});

db.propietarios.hasMany(db.mascota, {as: "mascotas"});
db.mascota.belongsTo(db.propietarios,{
    foreignKey:"propietarioId",
    as: "propietario",
});

db.ubigeos.hasMany(db.propietarios, {as: "propietarios", foreignKey:"ubigeoId"});
db.propietarios.belongsTo(db.ubigeos,{
    foreignKey:"ubigeoId",
    as: "ubigeo",
});

db.nacionalidads.hasMany(db.propietarios, {as: "propietarios"});
db.propietarios.belongsTo(db.nacionalidads,{
    foreignKey:"nacionalidadId",
    as: "nacionalidad",
});


module.exports = db;