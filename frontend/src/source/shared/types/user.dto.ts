import { Chat, Message, Meta } from "@/source/shared";

export type User = {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  role: string;
  description?: string;
  jwt: string;
  chats?: Chat[];
  messages?: Message[];
};

type AdditionalData = {
  status: boolean;
  message: string;
  meta: Meta;
};

export type UserJwt = {
  status: string;
  message: string;
  user: User;
};

export type AllUsers = AdditionalData & {
  data: User[];
};

export type OneUser = AdditionalData & {
  data: User;
};
