import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/entities";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import { nextOptions } from "@/shared";
import { MainProvider } from "@/app/providers/MainProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social net",
  description: "Best social net",
};

export const viewport: Viewport = {
  themeColor: "#0E0b18",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextOptions);

  return (
    <html lang='en'>
      <body className={clsx(inter.className, "h-svh")}>
        <MainProvider session={session}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MainProvider>
      </body>
    </html>
  );
}
