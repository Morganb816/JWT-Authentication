import { Response } from 'express';

/**
 * Token name variables for if you cant spell like me.
 */
const AUTH_TOKEN = 'auth-token';
const REFRESH_TOKEN = 'refresh-token';

/**
 * Set auth sets the authorization token on the headers of our response.
 * @export
 * @param  {Response} res 
 * @param  {string} auth 
 * @return Response 
 */
export function setAuth(res: Response, auth: string): Response {
    res.set(AUTH_TOKEN, auth);
    return res;
}

/**
 * Set refresh set the refresh token cookie on our respose.
 * @export
 * @param  {Response} res 
 * @param  {string} refresh 
 * @return Response 
 */
export function setRefresh(res: Response, refresh: string): Response {
    res.cookie(REFRESH_TOKEN, refresh, {
        httpOnly: true,
        maxAge: new Date(Date.now() + 10000000000).getTime()
    });
    return res;
}

/**
 * Set tokens sets both auth and refresh tokens on our response and returns the response.
 * @param res 
 * @param auth 
 * @param refresh 
 */
export function setTokens(res: Response, auth: string, refresh: string): Response {
    return setRefresh(setAuth(res, auth), refresh);
}

/**
 * Destroy tokens is used to clear all tokens for our user.
 * @export
 * @param  {Response} res 
 * @return Response 
 */
export function destroyTokens(res: Response): Response {
    return setAuth(res, '').clearCookie(REFRESH_TOKEN);
}