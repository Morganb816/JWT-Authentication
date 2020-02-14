import { Response } from 'express';

const AUTH_TOKEN = 'auth-token';
const REFRESH_TOKEN = 'refresh-token';

export function setAuth(res: Response, auth: string): Response {
    res.set(AUTH_TOKEN, auth);
    return res;
}

export function setRefresh(res: Response, refresh: string): Response {
    res.cookie(REFRESH_TOKEN, refresh, {
        httpOnly: true,
        maxAge: new Date(Date.now() + 10000000000).getTime()
    });
    return res;
}

export function setTokens(res: Response, auth: string, refresh: string): Response {
    return setRefresh(setAuth(res, auth), refresh);
}

export function destroyTokens(res: Response): Response {
    return setAuth(res, '').clearCookie(REFRESH_TOKEN);
}