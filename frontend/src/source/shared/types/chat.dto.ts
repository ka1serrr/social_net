import { User } from "@/shared";

export type Message = {
  text: string;
  id: string;
  createdAt: string;
  author: User;
  receiver: string;
};

export type Chat = {
  id: string;
  messages: Message[];
  members: User[];
};
