import { links } from "@/app/config";
import { BookUser, LucideIcon, MessageCircle, Settings, User2 } from "lucide-react";

const {
  linksSideBar: { chats, friends, settings, users },
} = links;

type Navigation = {
  url: string;
  icon: LucideIcon;
};

export const NAVIGATION: Navigation[] = [
  {
    url: friends,
    icon: BookUser,
  },
  {
    url: users,
    icon: User2,
  },
  {
    url: chats,
    icon: MessageCircle,
  },
  {
    url: settings,
    icon: Settings,
  },
];
