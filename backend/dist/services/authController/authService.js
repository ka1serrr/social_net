"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../../models/prisma"));
const helpers_1 = require("../../helpers");
const http_errors_1 = __importDefault(require("http-errors"));
class AuthService {
    async register(data) {
        data.password = bcryptjs_1.default.hashSync(data.password, 8);
        const user = await prisma_1.default.user.create({
            data,
        });
        data.jwt = await (0, helpers_1.generateToken)(user);
        return data;
    }
    async login(data) {
        const { email, password } = data;
        const user = await prisma_1.default.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw http_errors_1.default.NotFound("User is not registered");
        }
        const checkPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!checkPassword)
            throw http_errors_1.default.Unauthorized("Email or password is incorrect");
        const jwt = await (0, helpers_1.generateToken)(user);
        return { ...user, jwt };
    }
    async all(page = "1", limit = "30") {
        return prisma_1.default.user.paginate().withPages({
            limit: Number(limit),
            page: Number(page),
        });
    }
}
const authController = new AuthService();
exports.register = authController.register, exports.login = authController.login, exports.all = authController.all;
//# sourceMappingURL=authService.js.map