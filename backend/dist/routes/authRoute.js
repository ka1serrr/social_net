"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
// @ts-ignore
exports.router = new express_1.Router();
exports.router.post("/register", controllers_1.authController.register);
exports.router.post("/login", controllers_1.authController.login);
exports.router.get("/users", middlewares_1.authCheckMiddleware, controllers_1.authController.all);
exports.router.get("/users/:userId", middlewares_1.authCheckMiddleware, controllers_1.authController.getOneUser);
//# sourceMappingURL=authRoute.js.map