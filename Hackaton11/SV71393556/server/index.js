const express = require("express");
const sequelize = require("../sequelize");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.duenosPath = "/api/duenos";
    this.mascotasPath = "/api/mascotas";

    //Middlewares

    this.middlewares();
    //Rutas de mi aplicacion

    this.routes();
    //base de datos
    this.connectDb();
  }

  middlewares() {
    this.app.use(express.json());
  }

  connectDb = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  routes() {
    this.app.use(this.duenosPath, require("../routes/duenos"));
    this.app.use(this.mascotasPath, require("../routes/mascotas"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
