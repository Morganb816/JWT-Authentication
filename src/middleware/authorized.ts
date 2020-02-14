import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../util/token';
/**
 * Authenticated is our middleware we use to see if a token is valid.
 * If it is we pass along the users username in the response locals for
 * the next function to use for data access.
 * @export
 * @param  {Request} req 
 * @param  {Response} res 
 * @param  {NextFunction} next 
 * @return Promise<void> 
 */
export async function authenticated(req: Request, res: Response, next: NextFunction): Promise<void> {
    const TOKEN = 'TOKEN';
    const NOT_AUTHORIZED = 'NOT_AUTHORIZED';

    try {
        const token: string | undefined = req.headers.authorization?.split(' ')[1];
        if (!token?.length)
            throw new Error(TOKEN);

        const authenticated: string = await verifyToken(token);
        if (!authenticated.length)
            throw new Error(NOT_AUTHORIZED);

        res.locals.user = authenticated;
        next();
    } catch (err) {
        switch (err.message) {
            case TOKEN:
                res.status(500).send('No token found');
                break;
            case NOT_AUTHORIZED:
                res.status(401).send('User not authorized to make this request');
                break;
            default:
                res.status(500).send('Internal server error.');
        }
    }
}