"use client";

import { FC } from "react";
import { useAuth, User } from "@/shared";
import Image from "next/image";

type Props = {
  users: User[];
};
const UsersListItem: FC<User> = (props) => {
  const { email, id, description, avatar, username } = props;
  const { data: currentUser } = useAuth();

  if (email === currentUser?.email) {
    return null;
  }

  return (
    <div className='p-layout flex items-center border-b border-white-borders'>
      <Image src={avatar || "/no_img.png"} alt='Avatar' width={75} height={75} />
      <div>
        <div className='flex flex-col'>
          <span className='text-xl font-bold block'>{username}</span>
          <span className='text-sm font-light block'>{description}</span>
        </div>
      </div>
    </div>
  );
};

export const UsersListItems: FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UsersListItem {...user} />
      ))}
    </>
  );
};
