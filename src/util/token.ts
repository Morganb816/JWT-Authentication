import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../../app.json';

function getSecret(): string {
    const secret =
        process.env.NODE_ENV !== 'production'
            ? require('../../secrets.json').jwtSecret
            : process.env.JWT_SECRET;
    return secret;
}

export function createToken(payload: any): string {
    return jwt.sign(payload, getSecret(), { expiresIn: config.authExpireTime });
}

export function createRefreshToken(): string {
    return crypto.randomBytes(75).toString('hex');
}

export async function verifyToken(token: string): Promise<string> {
    try {
        const result: string = await new Promise((resolve: Function, reject: Function) => {
            jwt.verify(token, getSecret(), (err: Error, decoded: any) => {
                if (err)
                    reject(err);
                resolve(decoded.username);
            });
        });
        return result;
    } catch (err) {
        return '';
    }
}