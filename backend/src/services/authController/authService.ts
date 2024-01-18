import { Login, Register } from "./authControllerTypes";
import bcrypt from "bcryptjs";
import prisma from "../../models/prisma";
import { generateToken } from "../../helpers";
import createError from "http-errors";

class AuthService {
  async register(data: Register) {
    data.password = bcrypt.hashSync(data.password, 8);
    const user = await prisma.user.create({
      data,
    });
    data.jwt = await generateToken(user);
    return data;
  }

  async login(data: Login) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw createError.NotFound("User is not registered");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) throw createError.Unauthorized("Email or password is incorrect");

    const jwt = await generateToken(user);

    return { ...user, jwt };
  }
  async all(page: string = "1", limit: string = "30") {
    return prisma.user.paginate().withPages({
      limit: Number(limit),
      page: Number(page),
    });
  }
}

const authController = new AuthService();

export const { register, login, all } = authController;
