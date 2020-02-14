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
exports.__esModule = true;
var token_1 = require("../util/token");
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
function authenticated(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var TOKEN, NOT_AUTHORIZED, token, authenticated_1, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    TOKEN = 'TOKEN';
                    NOT_AUTHORIZED = 'NOT_AUTHORIZED';
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
                    if (!((_b = token) === null || _b === void 0 ? void 0 : _b.length))
                        throw new Error(TOKEN);
                    return [4 /*yield*/, token_1.verifyToken(token)];
                case 2:
                    authenticated_1 = _c.sent();
                    if (!authenticated_1.length)
                        throw new Error(NOT_AUTHORIZED);
                    res.locals.user = authenticated_1;
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _c.sent();
                    switch (err_1.message) {
                        case TOKEN:
                            res.status(500).send('No token found');
                            break;
                        case NOT_AUTHORIZED:
                            res.status(401).send('User not authorized to make this request');
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
exports.authenticated = authenticated;
