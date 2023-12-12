import { links } from "@/app/config";
import { BookUser, MessageCircle, Settings, Sun, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const {
    linksSideBar: { friends, users, chats, settings },
  } = links;

  return (
    <aside className='flex items-center flex-col justify-between'>
      <Image src='/logo.svg' alt='icon' width={50} height={50} className='cursor-pointer' />
      <div>
        <Link href={friends}>
          <BookUser />
        </Link>
        <Link href={users}>
          <Users2 />
        </Link>
        <Link href={chats}>
          <MessageCircle />
        </Link>
        <Link href={settings}>
          <Settings />
        </Link>
      </div>

      <Sun />
    </aside>
  );
};
