"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Account represents a users account in our application. Things like
 * first name, last name, contact info, should be stored somewhere else.
 *
 * @export
 * @class Account
 * @implements AccountInterface
 */
var Account = /** @class */ (function () {
    function Account(username, password) {
        this.username = username;
        this.password = password;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=Account.js.map