import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../../app.json';
/**
 * Retreives this applications secret string used for creating tokens
 * @return string 
 */
function getSecret(): string {
    const secret =
        process.env.NODE_ENV !== 'production'
            ? require('../../secrets.json').jwtSecret
            : process.env.JWT_SECRET;
    return secret;
}
/**
 * Creates a token from a given payload
 * @export
 * @param  {*} payload 
 * @return string 
 */
export function createToken(payload: any): string {
    return jwt.sign(payload, getSecret(), { expiresIn: config.authExpireTime });
}
/**
 * Creates a refresh token.
 * @export
 * @return string 
 */
export function createRefreshToken(): string {
    return crypto.randomBytes(75).toString('hex');
}
/**
 * Verifys a token with our applications secret
 * @export
 * @param  {string} token 
 * @return Promise<string> 
 */
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