"use client";

import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION } from "./sidebar.data";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useAuth } from "@/shared";

export const Sidebar = () => {
  const pathname = usePathname();
  const { status } = useAuth();

  return (
    <aside className='border-r border-white-borders flex flex-col items-center gap-[50px] p-layout h-screen min-w-[77px]'>
      {status == "authenticated" ? (
        <>
          <Link href='/'>
            <Image src='/logo.svg' alt='icon' width={40} height={40} priority className='cursor-pointer' />
          </Link>

          <div className='flex flex-col gap-[24px] md:gap-6'>
            {NAVIGATION.map((item) => (
              <Link
                key={item.url}
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
        </>
      ) : null}
    </aside>
  );
};
