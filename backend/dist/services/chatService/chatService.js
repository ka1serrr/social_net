"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../models/prisma"));
class AuthService {
    constructor() {
        this.getChats = async (username, id, page, limit) => {
            const chats = prisma_1.default.chat.paginate().withPages({
                limit: Number(limit),
                page: Number(page),
            });
        };
    }
}
//# sourceMappingURL=chatService.js.map