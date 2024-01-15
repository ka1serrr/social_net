import { Chat, Message } from "@/source/shared";

export type User = {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  role: string;
  description?: string;
  jwt: string;
};

export type UserJwt = {
  status: string;
  message: string;
  user: User;
};

export type ResponseUser = User & {
  chats: Chat[];
  messages: Message[];
};
