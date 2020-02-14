"use strict";
exports.__esModule = true;
var refreshSchema_1 = require("../schema/refreshSchema");
var util_1 = require("../util");
var __1 = require("..");
/**
 * Creates a new refresh model.
 * @export
 * @param  {typeof mongoose} connection
 * @return Model<any>
 */
function createRefreshModel(connection) {
    return connection.model('Refresh', refreshSchema_1["default"]);
}
exports.createRefreshModel = createRefreshModel;
/**
 * Gets a refresh token by the token
 * @param  {Model<any>} model
 * @param  {string} token
 * @return DocumentQuery<any, any, {}>
 */
exports.getRefresh = util_1.createInteraction(__1.refreshModel, function (model, token) {
    return model.findOne().where('token').equals(token);
});
/**
 * Delets a refresh token by the token
 * @param  {Model<any>} model
 * @param  {string} token
 * @return DocumentQuery<any, any, {}>
 */
exports.deleteRefresh = util_1.createInteraction(__1.refreshModel, function (model, token) {
    return model.findOneAndDelete().where('token').equals(token);
});
/**
 * Creates a new refresh token for a specific user.
 * @param  {Model<any>} model
 * @param  {RefreshInterface} data
 * @return Promise<any[]>
 */
exports.createRefresh = util_1.createInteraction(__1.refreshModel, function (model, data) {
    return util_1.createSync(model, { token: data.token, username: data.username });
});
