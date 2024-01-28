"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const services_1 = require("../services");
class AuthController {
    constructor() {
        this.register = async (req, res, next) => {
            try {
                const user = await (0, services_1.register)(req.body);
                res.status(200).json({
                    status: true,
                    message: "User created successfully",
                    user,
                });
            }
            catch (e) {
                console.log(e);
                res.status(500).json({
                    message: "Internal server error",
                    status: 500,
                });
            }
        };
        this.login = async (req, res, next) => {
            try {
                const user = await (0, services_1.login)(req.body);
                res.status(200).json({
                    status: true,
                    message: "Successful login",
                    user,
                });
            }
            catch (e) {
                console.log(e);
                res.status(500).json({
                    message: "Internal server error",
                    status: 500,
                });
            }
        };
        this.all = async (req, res) => {
            try {
                const { page, limit } = req.query;
                const [users, meta] = await (0, services_1.all)(page, limit);
                res.status(200).json({
                    status: true,
                    message: "Successfully got data",
                    data: users,
                    meta: meta,
                });
            }
            catch (e) {
                res.status(500).json({
                    message: "Internal server error",
                    status: 500,
                });
            }
        };
        this.getOneUser = async (req, res) => {
            try {
                const { userId } = req.params;
                const user = await (0, services_1.getOneUser)(userId);
                res.status(200).json({
                    status: true,
                    message: "Successfully got data",
                    data: user,
                });
            }
            catch (e) {
                res.status(500).json({
                    message: "Internal server error",
                    status: 500,
                });
            }
        };
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map