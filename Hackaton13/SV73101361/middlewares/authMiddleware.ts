import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: string | JwtPayload; // Define la propiedad user
}

import { Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwtUtils';

export function authMiddleware(req: CustomRequest, res: Response, next: NextFunction): void {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
    }

    try {
        const decoded = verifyJwt(token, process.env.JWT_SECRET || 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}
