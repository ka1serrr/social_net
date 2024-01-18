import { NextFunction, Request, Response } from "express";
import { register, login, all } from "../services";

class AuthController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await register(req.body);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        user,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await login(req.body);
      res.status(200).json({
        status: true,
        message: "Successful login",
        user,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };

  all = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, limit } = req.query;
      const [users, meta] = await all(page as string, limit as string);
      res.status(200).json({
        status: true,
        message: "Successfully got data",
        data: users,
        meta: meta,
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };
}

export const authController = new AuthController();
