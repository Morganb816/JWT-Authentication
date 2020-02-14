"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app_json_1 = require("../app.json");
var corsConfig_1 = __importDefault(require("./corsConfig"));
var index_1 = __importDefault(require("./controller/index"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(cookie_parser_1.default());
app.use(cors_1.default(__assign({}, corsConfig_1.default)));
app.use('/api', index_1.default);
app.listen(process.env.PORT || app_json_1.port, function () {
    console.log("\n\n    Running on port: " + (process.env.PORT || app_json_1.port) + "\n    \n");
});
//# sourceMappingURL=app.js.map