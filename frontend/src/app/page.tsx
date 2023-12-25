import { NextAuthProvider } from "@/app/providers/NextAuthProvider";
import { Chat, ChatList, CurrentUser } from "@/features/Chat";

export default function ChatsPage() {
  return (
    <NextAuthProvider>
      <div
        className='grid h-full'
        style={{
          gridTemplateColumns: ".7fr 3fr",
        }}
      >
        <div className='border-r border-white-borders'>
          <CurrentUser />
          <ChatList />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </NextAuthProvider>
  );
}
