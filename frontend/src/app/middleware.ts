import { withAuth } from "next-auth/middleware";
import { links } from "@/app/config";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      const {
        linksSideBar: { friends, users, settings, chats },
      } = links;
      if (
        (req.nextUrl.pathname.startsWith(friends) ||
          req.nextUrl.pathname.startsWith(users) ||
          req.nextUrl.pathname.startsWith(settings) ||
          req.nextUrl.pathname.startsWith(chats)) &&
        token === null
      ) {
        return false;
      }
      return true;
    },
  },
});
