"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
// CREATE APP
var app = (0, express_1.default)();
// MIDDLEWARE
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['lasfjaf'] })); // ADD SESSION TO REQ PROPERTY
// ROUTER
app.use(AppRouter_1.AppRouter.getInstance());
// APP LISTENING PORT
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
