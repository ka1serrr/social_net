"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = void 0;
const permit = (permission) => {
    return (req, res, next) => {
        const { role } = req.user;
        if (role && role === "ADMIN") {
            next();
        }
        else
            res.status(403).json({ status: 403, message: "Forbidden" });
    };
};
exports.permit = permit;
//# sourceMappingURL=adminRoleMiddleware.js.map