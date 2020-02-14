"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * Hashes a given string into a secure string
 * @export
 * @param  {string} str
 * @return string
 */
function hashString(str) {
    return bcrypt_1.default.hashSync(str, bcrypt_1.default.genSaltSync(10));
}
exports.hashString = hashString;
/**
 * Checks if a given string is equal to a given hash.
 * @export
 * @param  {string} str
 * @param  {string} hash
 * @return boolean
 */
function checkStringAgainstHash(str, hash) {
    return bcrypt_1.default.compareSync(str, hash);
}
exports.checkStringAgainstHash = checkStringAgainstHash;
//# sourceMappingURL=hash.js.map