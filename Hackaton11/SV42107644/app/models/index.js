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
    },
    define: {
        freezeTableName: true 
    }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ubigeo = require("./ubigeo.model.js")(sequelize, Sequelize);
db.nacionalidad = require("./nacionalidad.model.js")(sequelize, Sequelize);
db.propietario = require("./propietario.model.js")(sequelize, Sequelize);

db.sexo = require("./sexo.model.js")(sequelize, Sequelize);
db.raza = require("./raza.model.js")(sequelize, Sequelize);
db.especie = require("./especie.model.js")(sequelize, Sequelize);
db.color = require("./color.model.js")(sequelize, Sequelize);

db.vacunas = require("./vacunas.model.js")(sequelize, Sequelize);
db.mascota = require("./mascota.model.js")(sequelize, Sequelize);


db.ubigeo.hasMany(db.propietario, {
    foreignKey: 'ubigeo',
    as: 'propietarios'
});

db.nacionalidad.hasMany(db.propietario, {
    foreignKey: 'idNacionalidad',
    as: 'propietarios'
});

db.propietario.belongsTo(db.nacionalidad, {
    foreignKey: 'idNacionalidad',
    as: 'nacionalidad'
});

db.propietario.hasMany(db.mascota, {
    foreignKey: 'idPropietario',
    as: 'mascotas'
});

db.sexo.hasMany(db.mascota, {
    foreignKey: 'idSexo',
    as: 'mascotas'
});

db.raza.hasMany(db.mascota, {
    foreignKey: 'idRaza',
    as: 'mascotas'
});

db.especie.hasMany(db.mascota, {
    foreignKey: 'idEspecie',
    as: 'mascotas'
});

db.color.hasMany(db.mascota, {
    foreignKey: 'idColor',
    as: 'mascotas'
});


db.mascota.belongsTo(db.propietario, {
    foreignKey: 'idPropietario',
    as: 'propietario'
});

db.mascota.belongsTo(db.sexo, {
    foreignKey: 'idSexo',
    as: 'sexo'
});

db.mascota.belongsTo(db.raza, {
    foreignKey: 'idRaza',
    as: 'raza'
});

db.mascota.belongsTo(db.especie, {
    foreignKey: 'idEspecie',
    as: 'especie'
});

db.mascota.belongsTo(db.color, {
    foreignKey: 'idColor',
    as: 'color'
});

db.mascota.belongsToMany(db.vacunas, {
    through: "mascota_vacuna",
    as: "vacunas",
    foreignKey: "idMascota",
});

db.vacunas.belongsToMany(db.mascota, {
    through: "mascota_vacuna",
    as: "mascotas",
    foreignKey: "idVacuna",
});






module.exports = db;
