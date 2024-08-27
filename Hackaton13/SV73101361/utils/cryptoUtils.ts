import crypto from 'crypto';

export function hashPassword(password: string){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHmac('sha512', salt).update(password).digest('base64');
    return `${salt}:${hash}`;
}

export function verifyPassword(password: string, hashedPassword: string ): boolean {
    const [salt, storedHash] = hashedPassword.split(':');
    const hash = crypto.createHmac('sha512', salt).update(password).digest('base64');
    return hash === storedHash;
}