import NextAuth from "next-auth/next";
import { nextOptions } from "@/shared";

const handler = nextOptions;
export default handler;
export { handler as GET, handler as POST };