import jwt, { Secret } from "jsonwebtoken";

const secret = process.env.JWT_SECRET as Secret;
export const generateToken = async (payload: any) => {
  return jwt.sign({ payload }, secret);
};
