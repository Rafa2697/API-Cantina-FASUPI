"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderItem = exports.deleteOrderItem = exports.addOrderItem = exports.getAllOrderItems = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllOrderItems = async () => {
    return await prisma.orderItem.findMany();
};
exports.getAllOrderItems = getAllOrderItems;
const addOrderItem = async ({ orderId, quantity, price, foodId, name, subtotal }) => {
    try {
        return await prisma.orderItem.create({
            data: {
                orderId,
                quantity,
                price,
                foodId,
                name,
                subtotal
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.addOrderItem = addOrderItem;
const deleteOrderItem = async (id) => {
    try {
        return await prisma.orderItem.delete({
            where: {
                id
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteOrderItem = deleteOrderItem;
const updateOrderItem = async ({ id, orderId, foodId, name, price, quantity, subtotal }) => {
    try {
        return await prisma.orderItem.update({
            where: {
                id
            },
            data: {
                orderId,
                foodId,
                name,
                price,
                quantity,
                subtotal
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateOrderItem = updateOrderItem;
//# sourceMappingURL=orderItem.service.js.map