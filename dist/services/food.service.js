"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFoods = void 0;
exports.addFood = addFood;
exports.deleteFood = deleteFood;
exports.updateFood = updateFood;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllFoods = async () => {
    return await prisma.menuItem.findMany({
        orderBy: {
            createdAt: 'asc'
        },
        include: {
            category: true
        }
    });
};
exports.getAllFoods = getAllFoods;
async function addFood(name, description, price, imagemURL, categoryId, isAvailable) {
    try {
        return await prisma.menuItem.create({
            data: {
                name,
                description,
                price,
                imagemURL,
                categoryId,
                isAvailable
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
async function deleteFood(id) {
    try {
        return await prisma.menuItem.delete({
            where: {
                id
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
async function updateFood({ id, name, description, price, imagemURL, categoryId, isAvailable }) {
    try {
        return await prisma.menuItem.update({
            where: {
                id
            },
            data: {
                name,
                description,
                price,
                imagemURL,
                categoryId,
                isAvailable
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=food.service.js.map