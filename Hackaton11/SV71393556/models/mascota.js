const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Dueno = require("./dueno");
const Mascota = sequelize.define("mascota", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  raza: {
    type: DataTypes.STRING(11),
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  peso: {
    type: DataTypes.INTEGER,
  },

  //   dueno_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "duenos",
  //       key: "id",
  //     },
  //     allowNull: false,
  //   },
});

// Dueno.hasMany(Mascota, {
//   foreignKey: "dueno_id",
//   sourceKey: "id",
// });
Dueno.hasMany(Mascota);
Mascota.belongsTo(Dueno);
// Mascota.belongsTo(Dueno, {
//   foreignKey: "dueno_id",
//   targetKey: "id",
// });

Mascota.sync({ force: true }).then(() => {
  console.log("The table for the Mascota model was just (re)created!");
});
module.exports = Mascota;
