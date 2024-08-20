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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario=require("./usuario.model.js")(sequelize,Sequelize);
db.especie=require("./especie.model.js")(sequelize,Sequelize);
db.raza=require("./raza.model.js")(sequelize,Sequelize);
db.sexo=require("./sexo.model.js")(sequelize,Sequelize);
db.color=require("./color.model.js")(sequelize,Sequelize);
db.vacunas=require("./vacunas.model.js")(sequelize,Sequelize);
db.nacionalidad=require("./nacionalidad.model.js")(sequelize,Sequelize);
db.ubigeo=require("./ubigeo.model.js")(sequelize,Sequelize);
db.propietario=require("./propietario.model.js")(sequelize,Sequelize);
db.Mascota=require("./mascota.model.js")(sequelize,Sequelize);

db.nacionalidad.hasMany(db.propietario, { as: "propietario" });
db.propietario.belongsTo(db.nacionalidad, {
    foreignKey: "nacionalidadId",
    as: "nacionalidad",
});
db.ubigeo.hasMany(db.propietario, { as: "propietario" });
db.propietario.belongsTo(db.ubigeo, {
    foreignKey: "ubigeoId",
    as: "ubigeo",
});
db.color.hasMany(db.Mascota, { as: "mascota" });
db.Mascota.belongsTo(db.ubigeo, {
    foreignKey: "colorId",
    as: "color",
});
db.especie.hasMany(db.Mascota, { as: "mascota" });
db.Mascota.belongsTo(db.especie, {
    foreignKey: "especieId",
    as: "especie",
});
db.raza.hasMany(db.Mascota, { as: "mascota" });
db.Mascota.belongsTo(db.raza, {
    foreignKey: "razaId",
    as: "raza",
});
db.sexo.hasMany(db.Mascota, { as: "mascota" });
db.Mascota.belongsTo(db.sexo, {
    foreignKey: "sexoId",
    as: "sexo",
});
db.propietario.hasMany(db.Mascota, { as: "mascota" });
db.Mascota.belongsTo(db.propietario, {
    foreignKey: "propietarioId",
    as: "propietario",
});

module.exports = db;