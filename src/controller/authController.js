"use strict";
/**
 * @module Authorization Controller
 */
exports.__esModule = true;
var express_1 = require("express");
var authService_1 = require("../service/authService");
var authorized_1 = require("../middleware/authorized");
/**
 * Auth Controller.
 * This is our controller for handling authorization related services.
 * @export
 * @Router
 */
var authController = express_1.Router();
authController.post('/login', authService_1.loginService);
authController.post('/signup', authService_1.signupService);
authController.post('/refresh', authService_1.refreshService);
var logout = express_1.Router();
logout.use(authorized_1.authenticated);
logout.post('/logout', authService_1.logoutService);
authController.use(logout);
exports["default"] = authController;
