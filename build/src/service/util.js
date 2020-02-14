"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Token name variables for if you cant spell like me.
 */
var AUTH_TOKEN = 'auth-token';
var REFRESH_TOKEN = 'refresh-token';
/**
 * Set auth sets the authorization token on the headers of our response.
 * @export
 * @param  {Response} res
 * @param  {string} auth
 * @return Response
 */
function setAuth(res, auth) {
    res.set(AUTH_TOKEN, auth);
    return res;
}
exports.setAuth = setAuth;
/**
 * Set refresh set the refresh token cookie on our respose.
 * @export
 * @param  {Response} res
 * @param  {string} refresh
 * @return Response
 */
function setRefresh(res, refresh) {
    res.cookie(REFRESH_TOKEN, refresh, {
        httpOnly: true,
        maxAge: new Date(Date.now() + 10000000000).getTime()
    });
    return res;
}
exports.setRefresh = setRefresh;
/**
 * Set tokens sets both auth and refresh tokens on our response and returns the response.
 * @param res
 * @param auth
 * @param refresh
 */
function setTokens(res, auth, refresh) {
    return setRefresh(setAuth(res, auth), refresh);
}
exports.setTokens = setTokens;
/**
 * Destroy tokens is used to clear all tokens for our user.
 * @export
 * @param  {Response} res
 * @return Response
 */
function destroyTokens(res) {
    return setAuth(res, '').clearCookie(REFRESH_TOKEN);
}
exports.destroyTokens = destroyTokens;
//# sourceMappingURL=util.js.map