"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.addOrders = exports.getAllOrders = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllOrders = async () => {
    return await prisma.order.findMany();
};
exports.getAllOrders = getAllOrders;
const addOrders = async ({ items, userEmail, userName }) => {
    try {
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return await prisma.order.create({
            data: {
                userName,
                userEmail,
                status: "PENDING",
                totalPrice,
                items: {
                    create: items.map(item => ({
                        foodId: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        subtotal: item.price * item.quantity,
                    }))
                },
            },
            include: { items: true }
        });
    }
    catch (error) {
        console.error("Erro ao criar pedido:", error);
        throw error;
    }
};
exports.addOrders = addOrders;
const updateOrder = async (id, status) => {
    try {
        return await prisma.order.update({
            where: {
                id
            },
            data: {
                status
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (id) => {
    try {
        return await prisma.order.deleteMany({
            where: {
                status: "Concluído"
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orders.service.js.map