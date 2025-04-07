"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUsers = async () => {
    return await prisma.admin.findMany();
};
exports.getAllUsers = getAllUsers;
const addUser = async (name, email, password, image) => {
    return await prisma.admin.create({
        data: { name, email, password, image },
    });
};
exports.addUser = addUser;
//# sourceMappingURL=user.service.js.map