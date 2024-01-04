import { Chat, CurrentUser } from "@/features/Chat";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { ChatList } from "@/widgets/ChatList";

export default function ChatsPage() {
  return (
    <AuthProvider>
      <div
        className='grid h-full'
        style={{
          gridTemplateColumns: "1fr 3fr",
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
    </AuthProvider>
  );
}
