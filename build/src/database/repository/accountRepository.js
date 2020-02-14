"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var accountSchema_1 = __importDefault(require("../schema/accountSchema"));
var util_1 = require("../util");
var __1 = require("..");
/**
 * Creats a account model.
 * @export
 * @param  {typeof mongoose} connection
 * @return Model<any>
 */
function createAccountModel(connection) {
    return connection.model('Account', accountSchema_1.default);
}
exports.createAccountModel = createAccountModel;
/**
 * Gets an account by username.
 * @param  {Model<any>} model
 * @param  {string} username
 * @return DocumentQuery<any, any, {}>
 */
exports.getAccount = util_1.createInteraction(__1.accountModel, function (model, username) {
    return model.findOne().where('username').equals(username);
});
/**
 * Delets an account by username.
 * @param  {Model<any>} model
 * @param  {string} username
 * @return DocumentQuery<any, any, {}>
 */
exports.deleteAccount = util_1.createInteraction(__1.accountModel, function (model, username) {
    return model.findOneAndDelete().where('username').equals(username);
});
/**
 * Creates an account from a given Account
 * @param  {Model<any>} model
 * @param  {Account} acc
 * @return Promise<any>
 */
exports.createAccount = util_1.createInteraction(__1.accountModel, function (model, acc) {
    return util_1.createSync(model, { username: acc.username, password: acc.password });
});
//# sourceMappingURL=accountRepository.js.map