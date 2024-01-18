import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import { User, UserWithRequest } from "../types";

export const authCheckMiddleware = (req: UserWithRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return next(createError(401, "User is not found"));
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return next(createError(403));
    req.user = user as User;
    next();
  });
};
