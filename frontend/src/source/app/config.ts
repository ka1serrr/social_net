class Links {
  linksSideBar = {
    friends: "/friends",
    users: "/users",
    chats: "/",
    settings: "/settings",
  };
  apiUrls = {
    authorize: "/users?filters[email][$eq]=",
  };
}

const links = new Links();
export const { apiUrls } = links;
export { links };
