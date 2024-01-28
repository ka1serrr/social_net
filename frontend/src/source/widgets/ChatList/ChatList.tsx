"use client";

import { Input, Loader, useAuth, User } from "@/shared";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { $fecth } from "@/app/api";

export const ChatList = () => {
  const { data: user, isLoggedIn } = useAuth();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: () =>
      $fecth.get<User[]>({
        path: `chats?populate=members&populate[messages][populate][0]=author`,
        isAuth: true,
      }),
    enabled: isLoggedIn,
  });

  return (
    <div className='h-full'>
      <div className='border-b border-white-borders p-layout'>
        <Input placeholder='Search your chat' Icon={Search} />
      </div>
      <div className='h-full p-layout'>
        {isLoading ? (
          <div className='flex flex-col justify-center items-center'>
            <Loader className='h-full' />
          </div>
        ) : data?.length ? null : ( // <ChatListItems chats={data?.chats} />
          <p className='text-center font-bold text-xl'>There are no chats</p>
        )}
      </div>
    </div>
  );
};
