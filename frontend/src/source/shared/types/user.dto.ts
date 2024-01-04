export type User = {
  username: string;
  email: string;
  confirmed: boolean;
  avatar?: string;
  role: string;
  description?: string;
};

export type UserJwt = {
  jwt: string;
  user: User;
};
