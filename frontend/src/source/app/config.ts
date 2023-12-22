class Links {
  linksSideBar = {
    friends: "/friends",
    users: "/users",
    chats: "/",
    settings: "/settings",
  };
  apiUrls = {
    mainApi: "http://localhost:1337/api",
    authorize: "/users?filters[email][$eq]=",
    auth: "/auth/local/",
    register: `/auth/local/register`,
  };
}

const links = new Links();
export const { apiUrls } = links;
export { links };
