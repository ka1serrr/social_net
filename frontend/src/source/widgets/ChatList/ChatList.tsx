"use client";

import { Chat, Input, Loader } from "@/shared";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";

export const ChatList = () => {
  // const {
  //   data: chats,
  //   isError,
  //   isLoading,
  // } = useQuery({ queryKey: ["chats"], queryFn: () => $fecth.get<Chat>({ path: apiUrls.getChats, isAuth: true }) });

  return (
    <div>
      <div className='border-b border-white-borders p-layout'>
        <Input placeholder='Search your chat' Icon={Search} />
      </div>
      {/*<div>*/}
      {/*  {isLoading ? (*/}
      {/*    <div className='flex flex-col justify-center items-center'>*/}
      {/*      <Loader />*/}
      {/*    </div>*/}
      {/*  ) : null}*/}
      {/*</div>*/}
    </div>
  );
};
