"use client";
import { Session } from "next-auth";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useAuth } from "@/shared";

export const MainProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
