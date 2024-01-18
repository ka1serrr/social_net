import { Role, User } from "../types";

export class checkRole {
  static isAdmin(role: Role) {
    if ("ADMIN" === role) return true;
    else {
      throw new Error("You do not have access");
    }
  }
}
