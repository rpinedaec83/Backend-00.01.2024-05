import { Router } from "express";
import { createUser, listUser } from "../controllers/index.js";
import validateJwt from "../../../middleware/validate-jwt.js";

const usersRouter = Router();

usersRouter.post("/", createUser);
usersRouter.get("/",validateJwt, listUser);

export default usersRouter;

/**
 * import { Router } from "express";

const UsersRouter = Router();

export default UsersRouter;

 */
