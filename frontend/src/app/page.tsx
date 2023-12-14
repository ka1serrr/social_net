import { Chat, ChatList, CurrentUser } from "@/features/Chat";

export default function ChatsPage() {
  return (
    <div
      className='grid'
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}
    >
      <div>
        <CurrentUser />
        <ChatList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}
