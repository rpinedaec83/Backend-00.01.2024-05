import { Router } from "express";
import { authLoginCredentials } from "../controllers/index.js";

const authRouter = Router();

authRouter.post("/",[


    
],authLoginCredentials)

// authRouter.get("/",authLoginCredentials)

export default authRouter;

 
