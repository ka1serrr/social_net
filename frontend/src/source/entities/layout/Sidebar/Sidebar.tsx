"use client";
import { links } from "@/app/config";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION } from "./sidebar.data";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const {
    linksSideBar: { friends, users, chats, settings },
  } = links;

  const pathname = usePathname();

  return (
    <div className='border-r border-white-borders flex flex-col items-center gap-[50px] p-layout h-screen'>
      <Image src='/logo.svg' alt='icon' width={40} height={40} priority className='cursor-pointer' />
      <div className='flex flex-col gap-[24px] md:gap-6'>
        {NAVIGATION.map((item) => (
          <Link
            href={item.url}
            className={clsx("hover:scale-105 transition duration-150 text-custom-gray hover:text-white", {
              "text-white": pathname === item.url,
            })}
          >
            <item.icon size={26} />
          </Link>
        ))}
      </div>

      <Sun className='hover:scale-105 transition duration-150 text-custom-gray hover:text-white' size={26} />
    </div>
  );
};
