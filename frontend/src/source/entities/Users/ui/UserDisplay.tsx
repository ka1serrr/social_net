import { User } from "@/shared";
import { FC } from "react";
import Image from "next/image";

type Props = {
  user: User;
};

export const UserDisplay: FC<Props> = (props) => {
  const {
    user: { email, avatar, username, description },
  } = props;

  return (
    <div className='h-full overflow-hidden'>
      <div className='flex border-b border-white-borders p-6'>
        <Image src={avatar || "/no_img.png"} width={80} height={50} alt={`${username}'s avatar`} />
        <div>
          <h1 className='text-2xl font-bold uppercase'>{username}</h1>
          <a className='block' href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className='ml-[1rem] border-l border-white-borders pl-layout'>
          <span className='font-bold'>Description:</span>
          <p className='block break-words italic'>{description}</p>
        </div>
      </div>
    </div>
  );
};
