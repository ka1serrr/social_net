import React from "react";
import { AuthProvider } from "@/app/providers";
import { Metadata } from "next";
import { CurrentUser } from "@/features/Chat";
import { UsersList } from "@/widgets/UsersList";
import { UserProfile } from "@/widgets/UserProfile";

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
          gridTemplateColumns: "1fr  3fr",
        }}
      >
        <div className='border-r border-white-borders h-full overflow-y-auto min-w-[341px]'>
          <CurrentUser />
          <UsersList />
        </div>
        <UserProfile />
      </div>
    </AuthProvider>
  );
}
