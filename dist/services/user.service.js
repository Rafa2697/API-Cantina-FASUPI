import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllUsers = async () => {
    return await prisma.admin.findMany();
};
export const addUser = async (name, email, password, image) => {
    return await prisma.admin.create({
        data: { name, email, password, image },
    });
};
//# sourceMappingURL=user.service.js.map