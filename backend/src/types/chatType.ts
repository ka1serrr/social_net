import { User } from "./userType";
import { Message } from "./messageType";

export type Chat = {
  id: number;
  members: User[];
  messages: Message[];
};
