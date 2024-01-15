import { Chats } from "@/shared";
import { ChatsListItem } from "@/features/Chat/ChatPreview";

export const ChatListItems = ({ chats }: Chats) => {
  return <>{chats?.map((chat) => <ChatsListItem id={chat.id} messages={chat.messages} members={chat.members} />)}</>;
};
