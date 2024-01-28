"use client";

import { useActiveChat } from "@/source/entities/Users/models";
import { useQuery } from "@tanstack/react-query";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";
import { OneUser } from "@/shared";

export const UserProfile = () => {
  const chatId = useActiveChat((state) => state.chatId);

  const { data, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => $fecth.get<OneUser>({ path: `${apiUrls.getUsers}/${chatId}`, isAuth: true }),
    enabled: !!chatId,
  });

  console.log(data);

  if (!chatId) {
    return null;
  }

  return <div></div>;
};
