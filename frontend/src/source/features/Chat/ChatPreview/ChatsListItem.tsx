"use client";

import { Chat, Loader, useAuth } from "@/shared";
import { FC } from "react";
import Image from "next/image";

export const ChatsListItem: FC<Chat> = (props) => {
  const { members, messages } = props;
  const { data: user } = useAuth();

  const correspondent = members.find((u) => u.email !== user?.email);
  const lastMessage = messages.at(-1);

  return (
    <div className='p-layout flex items-center border-b border-white-borders'>
      <Image
        src={correspondent?.avatar || "/no_img.png"}
        alt={correspondent?.email || "no_image"}
        width={75}
        height={75}
      />
      <div>
        <div>
          <span className='text-xl font-bold'>{correspondent?.username}</span>
          <span className='text-xl font-bold'>{lastMessage?.createdAt}</span>
        </div>
        <span className='opacity-60 block'>{lastMessage?.text}</span>
      </div>
    </div>
  );
};
