"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
/**
 * Account Schema is the shape of accounts in our database.
 * @export
 * @Schema
 */
var accountSchema = new mongoose_1.Schema({
    username: String,
    password: String
});
exports["default"] = accountSchema;
