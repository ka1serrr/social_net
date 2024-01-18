"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const services_1 = require("../services");
class AuthController {
}
_a = AuthController;
AuthController.register = async (req, res, next) => {
    try {
        const user = await (0, services_1.register)(req.body);
        res.status(200).json({
            status: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (e) {
        res.status(401).json({
            message: "Internal server error",
            status: 401,
        });
    }
};
exports.authController = new AuthController();
//# sourceMappingURL=auth.service.js.map