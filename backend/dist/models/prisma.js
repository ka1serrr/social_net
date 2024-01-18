"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma_extension_pagination_1 = require("prisma-extension-pagination");
const prisma = new client_1.PrismaClient().$extends({
    model: {
        user: {
            paginate: prisma_extension_pagination_1.paginate,
        },
        chat: {
            paginate: prisma_extension_pagination_1.paginate,
        },
    },
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map