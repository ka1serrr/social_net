import { PrismaClient } from "@prisma/client";
import { paginate } from "prisma-extension-pagination";

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      paginate,
    },
    chat: {
      paginate,
    },
  },
});

export default prisma;
