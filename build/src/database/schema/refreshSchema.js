"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
/**
 * Refresh Schema is the shape of refresh tokens stored in our database.
 * @export
 * @Schema
 */
var refreshSchema = new mongoose_1.Schema({
    token: String,
    username: String
});
exports.default = refreshSchema;
//# sourceMappingURL=refreshSchema.js.map