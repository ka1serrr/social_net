"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren, ReactNode } from "react";

export const NextAuthProvider = ({ children, session }: { children: ReactNode; session?: Session }) => {
  return (
    <SessionProvider session={session} basePath='/api/auth/local'>
      {children}  
    </SessionProvider>
  );
};
