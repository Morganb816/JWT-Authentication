"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("./authController");
/**
 * api is our main controller that we use to add endpoints.
 * its base url is just root.
 * @export
 * @Router api
 */
var api = express_1.Router();
api.use('/auth', authController_1["default"]);
exports["default"] = api;
