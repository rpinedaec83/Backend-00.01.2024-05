import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    private authService: AuthService;

    constructor(){
        this.authService = new AuthService();
    }

    async register(req: Request, res: Response ): Promise<void>{
        try {
            const user = await this.authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async login(req: Request, res: Response ): Promise<void>{
        try {
            const { email , password } = req.body;
            const { user, token } = await this.authService.login(email, password);
            res.status(200).json({ user, token });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }
}
