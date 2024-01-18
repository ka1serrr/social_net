import { User } from "./userType";
import { Chat } from "./chatType";

export type Message = {
  id: number;
  author: User;
  authorId: number;
  chat: Chat;
  chatId: number;
  text: string;
  createdAt: Date;
};
