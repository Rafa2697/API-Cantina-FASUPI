"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = getAllCategories;
exports.addCategory = addCategory;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getAllCategories() {
    try {
        return await prisma.category.findMany();
    }
    catch (error) {
        console.error(error);
    }
}
async function addCategory(name) {
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