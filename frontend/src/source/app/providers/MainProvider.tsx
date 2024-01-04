"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ReactQueryProvider } from "@/app/providers";

export const MainProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  return (
    <SessionProvider session={session}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </SessionProvider>
  );
};
