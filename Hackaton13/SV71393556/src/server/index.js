import express from "express";
import mongoose from "../config/db/index.js";
import usersRouter from "../modules/users/routes/index.js";
import authRouter from "../modules/auth/routes/index.js";
import coursesRouter from "../modules/courses/routes/index.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.dbUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test";
    this.userPath = "/api/users";
    this.authPath = "/api/auth";
    this.coursesPath = "/api/courses";

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
      await mongoose.connect(this.dbUrl);
      console.log("MongoDB connected");
    } catch (err) {
      console.log("error in connect");
    }
  };

  routes() {
    this.app.use(this.userPath, usersRouter);
    this.app.use(this.authPath, authRouter);
    this.app.use(this.coursesPath, coursesRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}
export default Server;
