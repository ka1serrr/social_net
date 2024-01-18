"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../../models/prisma"));
const helpers_1 = require("../../helpers");
class AuthController {
    async register(data) {
        data.password = bcryptjs_1.default.hashSync(data.password, 8);
        const user = await prisma_1.default.user.create({
            data,
        });
        data.jwt = await (0, helpers_1.generateToken)(user);
        return data;
    }
}
const authController = new AuthController();
exports.register = authController.register;
//# sourceMappingURL=authController.js.map