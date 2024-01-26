import React from "react";
import { AuthProvider } from "@/app/providers";
import { Metadata } from "next";
import { Chat, CurrentUser } from "@/features/Chat";
import { UsersList } from "@/widgets/UsersList";

export const metadata: Metadata = {
  title: "All Users",
  description: "Here you can find list of all users",
};

export default function UsersPage() {
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
          <UsersList />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </AuthProvider>
  );
}
