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
    mainApi: "http://localhost:4000/api",
    auth: "auth/login",
    register: `auth/register`,
    getUsers: "auth/users",
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
