import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAllCategories() {
    try {
        return await prisma.category.findMany();
    }
    catch (error) {
        console.error(error);
    }
}
export async function addCategory(name) {
    try {
        return await prisma.category.create({
            data: {
                name
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=foodCategory.service.js.map