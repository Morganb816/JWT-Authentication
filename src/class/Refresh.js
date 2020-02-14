"use strict";
/**
 * @module Refresh
 */
exports.__esModule = true;
/**
 * Refresh is a class that allows us to easily relate tokens to users.
 * @export
 * @class Refresh
 * @implements RefreshInterface
 */
var Refresh = /** @class */ (function () {
    function Refresh(token, username) {
        this.token = token;
        this.username = username;
    }
    return Refresh;
}());
exports.Refresh = Refresh;
