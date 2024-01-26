import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import { Toaster } from "react-hot-toast";

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className='flex items-stretch'>
      <Sidebar />
      <section className='w-full h-svh'>{children}</section>
      <Toaster position='top-center' />
    </main>
  );
};
