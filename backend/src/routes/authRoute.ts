import { Router } from "express";
import { authController } from "../controllers";
import { authCheckMiddleware, permit } from "../middlewares";

// @ts-ignore
export const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/users", authCheckMiddleware, authController.all);
router.get("/users/:userId", authCheckMiddleware, authController.getOneUser);
