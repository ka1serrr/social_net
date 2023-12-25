import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/entities";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social net",
  description: "Best social net",
};

export const viewport: Viewport = {
  themeColor: "#0E0b18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, "h-screen")}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
