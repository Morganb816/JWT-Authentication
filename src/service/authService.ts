import { Request, Response, NextFunction } from "express";
import { Account } from "../class/Account";
import { hashString, checkStringAgainstHash } from "../util/hash";
import { accountModel, refreshModel } from '../database';
import { createAccount, getAccount } from "../database/repository/accountRepository";
import { setTokens } from "./util";
import { createToken, createRefreshToken } from "../util/token";
import { createRefresh, getRefresh, deleteRefresh } from "../database/repository/refreshRepository";
import { Refresh } from "../class/Refresh";

const EXISTS = 'EXISTS';
const TOKEN = 'TOKEN';
const CREATION = 'CREATION';
const PASSWORD = 'PASSWORD';
const NOT_FOUND = 'NOT_FOUND';

export async function loginService(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { username, password } = req.body;

    try {
        const foundUser: Account[] | undefined = await getAccount(accountModel, username);
        if (!foundUser?.length)
            throw new Error(NOT_FOUND);
        if (!checkStringAgainstHash(password, foundUser[0].password))
            throw new Error(PASSWORD);

        const refresh: string = createRefreshToken();
        const result = await createRefresh(refreshModel, new Refresh(refresh, username));
        if (!result.length)
            throw new Error(TOKEN);

        setTokens(res, createToken({ username: username }), refresh).send(true)
    } catch (err) {
        switch (err.message) {
            case NOT_FOUND:
                res.status(404).send(`${username}, does not have an account.`);
                break;
            case TOKEN:
                res.status(500).send('An error occured while logging in, please try again later.');
                break;
            default:
                res.status(500).send('Internal server error.');
        }
    }
}

export async function signupService(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { username, password } = req.body;

    try {
        const foundUser: Account[] | undefined = await getAccount(accountModel, username);
        if (foundUser?.length)
            throw new Error(EXISTS);

        const success = await createAccount(accountModel, new Account(username, hashString(password)));
        if (!success)
            throw new Error(CREATION);

        const refresh: string = createRefreshToken();
        const result = await createRefresh(refreshModel, new Refresh(refresh, username));
        if (!result)
            throw new Error(TOKEN);

        setTokens(res, createToken({ username: username }), refresh).send(true);
    } catch (err) {
        switch (err.message) {
            case EXISTS:
                res.status(409).send('Account with that username already exists.');
                break;
            case CREATION:
                res.status(500).send('An error occured while attempting to creat user, please try again later.');
                break;
            default:
                res.status(500).send('Internal server error.');
        }
    }
}

export async function refreshService(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const oldToken: string = req.cookies['refresh-token'];
        const refreshResult: Refresh[] | undefined = await getRefresh(refreshModel, oldToken);
        if (!refreshResult?.length)
            throw new Error(NOT_FOUND)

        const username = refreshResult[0].username;

        const refresh: string = createRefreshToken();
        const tokenResult = await createRefresh(refreshModel, new Refresh(refresh, username));
        if (!tokenResult)
            throw new Error(TOKEN);

        setTokens(res, createToken({ username: username }), refresh).send(true);
    } catch (err) {
        switch (err.message) {
            case NOT_FOUND:
                res.status(404).send('Refresh token invalid or not on record, please login');
                break;
            default:
                res.status(500).send('Internal server error.');
        }
    }
}

export async function logoutService(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        await deleteRefresh(refreshModel, req.cookies['refresh-token']);
        setTokens(res, '', '').send(true);
    } catch (err) {
        switch (err.message) {
            default:
                res.status(500).send('Internal server error.');
                break;
        }
    }
}