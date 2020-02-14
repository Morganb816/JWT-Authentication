"use strict";
exports.__esModule = true;
var app_json_1 = require("../app.json");
/**
 * Cors configuration for our application.
 * @export
 * @CorsOptions
 */
var corsConfig = {
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (!app_json_1["default"].clientUrls.includes(origin)) {
            var errorMessage = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(errorMessage), false);
        }
        return callback(null, true);
    },
    exposedHeaders: [
        'auth-token',
        'Set-Cookie'
    ],
    credentials: true
};
exports["default"] = corsConfig;
