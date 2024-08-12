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



// Importar modelos
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.especie = require("./especie.model.js")(sequelize, Sequelize);
db.raza = require("./raza.model.js")(sequelize, Sequelize);
db.sexo = require("./sexo.model.js")(sequelize, Sequelize);
db.color = require("./color.model.js")(sequelize, Sequelize);
db.vacunas = require("./vacunas.model.js")(sequelize, Sequelize);
db.nacionalidad = require("./nacionalidad.model.js")(sequelize, Sequelize);
db.ubigeo = require("./ubigeo.model.js")(sequelize, Sequelize);
db.propietario = require("./propietario.model.js")(sequelize, Sequelize);
db.mascota = require("./mascota.model.js")(sequelize, Sequelize);
db.mascotaVacunas = require("./mascotaVacunas.model.js")(sequelize, Sequelize);

// // Establecer relaciones
// db.usuario.hasMany(db.mascota, { as: "mascotas", foreignKey: "usuarioCreacion" });
// db.mascota.belongsTo(db.usuario, { as: "creador", foreignKey: "usuarioCreacion" });

// db.especie.hasMany(db.mascota, { as: "mascotas", foreignKey: "idEspecie" });
// db.mascota.belongsTo(db.especie, { as: "especie", foreignKey: "idEspecie" });

// db.raza.hasMany(db.mascota, { as: "mascotas", foreignKey: "idRaza" });
// db.mascota.belongsTo(db.raza, { as: "raza", foreignKey: "idRaza" });

// db.sexo.hasMany(db.mascota, { as: "mascotas", foreignKey: "idSexo" });
// db.mascota.belongsTo(db.sexo, { as: "sexo", foreignKey: "idSexo" });

// db.color.hasMany(db.mascota, { as: "mascotas", foreignKey: "idColor" });
// db.mascota.belongsTo(db.color, { as: "color", foreignKey: "idColor" });

// db.propietario.hasMany(db.mascota, { as: "mascotas", foreignKey: "idPropietario" });
// db.mascota.belongsTo(db.propietario, { as: "propietario", foreignKey: "idPropietario" });

// db.mascota.belongsToMany(db.vacunas, { through: db.mascotaVacunas, as: "vacunas", foreignKey: "idMascota" });
// db.vacunas.belongsToMany(db.mascota, { through: db.mascotaVacunas, as: "mascotas", foreignKey: "idVacuna" });

module.exports = db;

