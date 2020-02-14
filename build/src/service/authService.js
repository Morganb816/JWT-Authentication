"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("../class/Account");
var hash_1 = require("../util/hash");
var database_1 = require("../database");
var accountRepository_1 = require("../database/repository/accountRepository");
var util_1 = require("./util");
var token_1 = require("../util/token");
var refreshRepository_1 = require("../database/repository/refreshRepository");
var Refresh_1 = require("../class/Refresh");
/**
 * Error string variables.
 * so if you cant type like me you dont need to worry.
 */
var EXISTS = 'EXISTS';
var TOKEN = 'TOKEN';
var CREATION = 'CREATION';
var PASSWORD = 'PASSWORD';
var NOT_FOUND = 'NOT_FOUND';
/**
 * Login Service
 * This service logs a requested user into our application responding with a set of tokens.
 * @export
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @return Promise<void>
 */
function loginService(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, username, password, foundUser, refresh, result, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, username = _b.username, password = _b.password;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, accountRepository_1.getAccount(database_1.accountModel, username)];
                case 2:
                    foundUser = _c.sent();
                    if (!((_a = foundUser) === null || _a === void 0 ? void 0 : _a.length))
                        throw new Error(NOT_FOUND);
                    if (!hash_1.checkStringAgainstHash(password, foundUser[0].password))
                        throw new Error(PASSWORD);
                    refresh = token_1.createRefreshToken();
                    return [4 /*yield*/, refreshRepository_1.createRefresh(database_1.refreshModel, new Refresh_1.Refresh(refresh, username))];
                case 3:
                    result = _c.sent();
                    if (!result.length)
                        throw new Error(TOKEN);
                    util_1.setTokens(res, token_1.createToken({ username: username }), refresh).send(true);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _c.sent();
                    switch (err_1.message) {
                        case NOT_FOUND:
                            res.status(404).send(username + ", does not have an account.");
                            break;
                        case TOKEN:
                            res.status(500).send('An error occured while logging in, please try again later.');
                            break;
                        default:
                            res.status(500).send('Internal server error.');
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.loginService = loginService;
/**
 * Signup Service
 * This service signs a new user up to our application and also responds with a set of tokens.
 * @export
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @return Promise<void>
 */
function signupService(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, username, password, foundUser, success, refresh, result, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, username = _b.username, password = _b.password;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, accountRepository_1.getAccount(database_1.accountModel, username)];
                case 2:
                    foundUser = _c.sent();
                    if ((_a = foundUser) === null || _a === void 0 ? void 0 : _a.length)
                        throw new Error(EXISTS);
                    return [4 /*yield*/, accountRepository_1.createAccount(database_1.accountModel, new Account_1.Account(username, hash_1.hashString(password)))];
                case 3:
                    success = _c.sent();
                    if (!success)
                        throw new Error(CREATION);
                    refresh = token_1.createRefreshToken();
                    return [4 /*yield*/, refreshRepository_1.createRefresh(database_1.refreshModel, new Refresh_1.Refresh(refresh, username))];
                case 4:
                    result = _c.sent();
                    if (!result)
                        throw new Error(TOKEN);
                    util_1.setTokens(res, token_1.createToken({ username: username }), refresh).send(true);
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _c.sent();
                    switch (err_2.message) {
                        case EXISTS:
                            res.status(409).send('Account with that username already exists.');
                            break;
                        case CREATION:
                            res.status(500).send('An error occured while attempting to creat user, please try again later.');
                            break;
                        default:
                            res.status(500).send('Internal server error.');
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.signupService = signupService;
/**
 * Refresh Service
 * Refresh service refreshes a users tokens if they have gone stale.
 * @export
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @return Promise<void>
 */
function refreshService(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var oldToken, refreshResult, username, refresh, tokenResult, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    oldToken = req.cookies['refresh-token'];
                    return [4 /*yield*/, refreshRepository_1.getRefresh(database_1.refreshModel, oldToken)];
                case 1:
                    refreshResult = _b.sent();
                    if (!((_a = refreshResult) === null || _a === void 0 ? void 0 : _a.length))
                        throw new Error(NOT_FOUND);
                    username = refreshResult[0].username;
                    refresh = token_1.createRefreshToken();
                    return [4 /*yield*/, refreshRepository_1.createRefresh(database_1.refreshModel, new Refresh_1.Refresh(refresh, username))];
                case 2:
                    tokenResult = _b.sent();
                    if (!tokenResult)
                        throw new Error(TOKEN);
                    util_1.setTokens(res, token_1.createToken({ username: username }), refresh).send(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _b.sent();
                    switch (err_3.message) {
                        case NOT_FOUND:
                            res.status(404).send('Refresh token invalid or not on record, please login');
                            break;
                        default:
                            res.status(500).send('Internal server error.');
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.refreshService = refreshService;
/**
 * Logout Service
 * Logout service logs a user our of our application by setting there tokens to empty strings and deleting
 * the refresh token they were using from our database.
 * @export
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @return Promise<void>
 */
function logoutService(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, refreshRepository_1.deleteRefresh(database_1.refreshModel, req.cookies['refresh-token'])];
                case 1:
                    _a.sent();
                    util_1.setTokens(res, '', '').send(true);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    switch (err_4.message) {
                        default:
                            res.status(500).send('Internal server error.');
                            break;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.logoutService = logoutService;
//# sourceMappingURL=authService.js.map