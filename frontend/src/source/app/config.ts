class Links {
  linksSideBar = {
    friends: "/friends",
    users: "/users",
    chats: "/",
    settings: "/settings",
  };
  pagesLinks = {
    friends: "/friends",
    users: "/users",
    chats: "/",
    settings: "/settings",
    register: "/register",
    login: "/login",
  };
  apiUrls = {
    mainApi: "http://localhost:1337/api",
    auth: "auth/local",
    register: `auth/local/register`,
    getChats: "chats",
  };
  formMessages = {
    required: "This field is required",
    minLength: "Minimum is",
    wrongFormat: "Incorrect format",
  };
}

const links = new Links();
export const { apiUrls, formMessages, pagesLinks } = links;
export { links };
