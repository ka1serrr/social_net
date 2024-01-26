"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ChatsController {
    constructor() {
        this.getChats = async (req, res) => {
            try {
                const { username } = req.user;
                const { page, limit } = req.params;
                const chats = await services_1.authService.getChats(username, page, limit);
                res.status(200).json({
                    status: true,
                    data: chats,
                });
            }
            catch (e) {
                res.status(500).json({
                    message: "Internal server error",
                    status: 500,
                });
            }
        };
        this.getChat = async (req, res) => {
            try {
                const { chatId } = req.body;
                const chat = await services_1.authService.getChat(chatId);
                res.status(200).json({
                    status: true,
                    data: chat,
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
//# sourceMappingURL=chats.controller.js.map