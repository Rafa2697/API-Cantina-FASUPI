import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllOrderItems = async () => {
    return await prisma.orderItem.findMany();
};
export const addOrderItem = async ({ orderId, quantity, price, foodId, name, subtotal }) => {
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
export const deleteOrderItem = async (id) => {
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
export const updateOrderItem = async ({ id, orderId, foodId, name, price, quantity, subtotal }) => {
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
//# sourceMappingURL=orderItem.service.js.map