export type Register = {
  email: string;
  username: string;
  password: string;
  jwt: string;
  description: string;
};

export type Login = {
  email: string;
  password: string;
};
