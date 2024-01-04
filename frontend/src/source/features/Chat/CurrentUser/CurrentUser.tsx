"use client";

import { Loader, useAuth } from "@/shared";
import Image from "next/image";
import { signOut } from "next-auth/react";

export const CurrentUser = () => {
  const { data: user, status } = useAuth();
  if (status !== "authenticated") {
    return (
      <div className='h-full flex flex-col justify-center items-center'>
        <Loader className='text-4xl' />
      </div>
    );
  }
  return (
    <div className='p-layout flex items-center border-b border-white-borders'>
      <Image src={user?.image || "/no_img.png"} alt={user?.email || "no_image"} width={75} height={75} />
      <div>
        <span className='text-xl font-bold'>{user?.username || <Loader />}</span>
        <span className='opacity-60 block'>Front-end Developer</span>
      </div>
    </div>
  );
};
