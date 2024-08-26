const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Dueno = sequelize.define("dueno", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // Model attributes are defined here
  nombres: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING(11),
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull defaults to true
  },
});

Dueno.sync({ alter: true }).then(() => {
  console.log("The table for the Dueno model was just (re)created!");
});
module.exports = Dueno;
