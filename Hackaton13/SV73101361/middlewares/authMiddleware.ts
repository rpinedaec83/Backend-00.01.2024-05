import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: string | JwtPayload;
}

export function authMiddleWare(req: CustomRequest, res: Response, next: NextFunction): void {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided' });
        return;
    }

    try {
        const decoded = jwt.decode(token) as JwtPayload | null;

        if (!decoded) {
            res.status(400).json({ message: 'Invalid Token' });
            return;
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Error decoding token' });
    }
}
