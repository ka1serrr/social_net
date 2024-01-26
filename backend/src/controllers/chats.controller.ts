import { Request, Response } from "express";
import { authService } from "../services";
import { UserWithRequest } from "../types";

class ChatsController {
  getChats = async (req: UserWithRequest, res: Response) => {
    try {
      const { username } = req.user;
      const { page, limit } = req.params;
      const chats = await authService.getChats(username, page, limit);
      res.status(200).json({
        status: true,
        data: chats,
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };
  getChat = async (req: Request, res: Response) => {
    try {
      const { chatId } = req.body;
      const chat = await authService.getChat(chatId);
      res.status(200).json({
        status: true,
        data: chat,
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };
}
