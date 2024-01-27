"use client";

import { AllUsers, Input, Loader, User } from "@/shared";
import { Search } from "lucide-react";
import { UsersListItems } from "@/entities";
import { useQuery } from "@tanstack/react-query";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";

export const UsersList = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => $fecth.get<AllUsers>({ path: apiUrls.getUsers, isAuth: true }),
  });

  return (
    <div>
      <div className='border-b border-white-borders p-layout'>
        <Input placeholder='Search for user' Icon={Search} />
      </div>
      <div>
        {isLoading ? (
          <div className='flex flex-col justify-center items-center'>
            <Loader className='h-full' />
          </div>
        ) : users?.data ? (
          <>
            <UsersListItems users={users?.data} />
          </>
        ) : null}
      </div>
    </div>
  );
};
