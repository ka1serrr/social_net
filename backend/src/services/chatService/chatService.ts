import prisma from "../../models/prisma";
class AuthService {
  getChats = async (username: string, page = "1", limit = "50") => {
    const chats = prisma.chat
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
  getChat = async (chatId: string) => {
    const chat = prisma.chat.findUnique({
      where: {
        id: Number(chatId),
      },
    });
    return chat;
  };
}

export const authService = new AuthService();
