"use client";

import { useActiveChat } from "@/source/entities/Users/models";
import { useQuery } from "@tanstack/react-query";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";
import { Loader, OneUser } from "@/shared";
import toast from "react-hot-toast";
import { UserDisplay } from "@/entities";

export const UserProfile = () => {
  const chatId = useActiveChat((state) => state.chatId);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => $fecth.get<OneUser>({ path: `${apiUrls.getUsers}/${chatId}`, isAuth: true }),
    enabled: !!chatId,
  });

  if (!chatId) {
    return null;
  }

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Loader size={50} className='m-auto' />
      </div>
    );
  }

  if (isError) {
    toast.error("Internal server error");
    return null;
  }

  if (data) {
    return <UserDisplay user={data?.data} />;
  }
};
