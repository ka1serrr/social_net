"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const prisma_1 = __importDefault(require("../../models/prisma"));
class AuthService {
    constructor() {
        this.getChats = async (username, page = "1", limit = "50") => {
            const chats = prisma_1.default.chat
                .paginate({
                where: {
                    members: {
                        some: {
                            username: {
                                contains: username,
                            },
                        },
                    },
                },
            })
                .withPages({
                limit: Number(limit),
                page: Number(page),
            });
            return chats;
        };
        this.getChat = async (chatId) => {
            const chat = prisma_1.default.chat.findUnique({
                where: {
                    id: Number(chatId),
                },
            });
            return chat;
        };
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=chatService.js.map