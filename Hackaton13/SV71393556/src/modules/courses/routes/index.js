import { Router } from "express";
import { create, findOne, findAll, deleteCourse, update }from "../controllers/index.js";

const coursesRouter = Router();

coursesRouter.get("/",findAll);
coursesRouter.post("/",create);
coursesRouter.get("/:id",findOne);
coursesRouter.delete("/:id",deleteCourse);
coursesRouter.patch("/:id",update);


export default coursesRouter;