import { Router } from "express";
import { findAll, create, findOne, deleteCoupon, update } from "../controllers/index.js";


const couponRouter = Router();

couponRouter.get("/",findAll);
couponRouter.post("/",create);
couponRouter.get("/:id",findOne);
couponRouter.delete("/:id",deleteCoupon);
couponRouter.patch("/:id",update);

export default couponRouter;
