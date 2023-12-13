import { links } from "@/app/config";
import { BookUser, MessageCircle, Settings, Sun, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const {
    linksSideBar: { friends, users, chats, settings },
  } = links;

  return (
    <div className='border-r border-white-borders flex flex-col items-center gap-[50px] p-2'>
      <Image src='/logo.svg' alt='icon' width={40} height={40} priority className='cursor-pointer' />
      <div className='flex flex-col gap-4'>
        <Link href={friends} className='hover:scale-105 transition duration-150'>
          <BookUser />
        </Link>
        <Link href={users} className='hover:scale-105 transition duration-150'>
          <Users2 />
        </Link>
        <Link href={chats} className='hover:scale-105 transition duration-150'>
          <MessageCircle />
        </Link>
        <Link href={settings} className='hover:scale-105 transition duration-150'>
          <Settings />
        </Link>
      </div>

      <Sun className='hover:scale-105 transition duration-150 cursor-pointer' />
    </div>
  );
};
