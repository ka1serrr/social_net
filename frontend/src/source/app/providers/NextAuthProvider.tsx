"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren, ReactNode } from "react";

export const NextAuthProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
