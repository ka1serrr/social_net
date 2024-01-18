import { Request } from "express";
import { Chat } from "./chatType";

export type Role = "USER" | "ADMIN";

export type User = {
  id: number;
  password: string;
  email: string;
  avatar?: string;
  username: string;
  role: Role;
  messages: string[];
  chats: Chat[];
};

export interface UserWithRequest extends Request {
  user: User;
}
