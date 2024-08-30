import jwt from 'jsonwebtoken';

export function generateJwt(payload: object, secret: string , expiresIn: string = '1h'): string {
    return jwt.sign(payload, secret, {expiresIn});
}

export function verifyJwt(token: string , secret: string): object | string {
    return jwt.verify(token,secret)
}