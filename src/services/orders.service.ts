import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface OrderData {
    items: OrderItem[];
    userEmail: string;
    userName: string;
}


export const getAllOrders = async () => {
    return await prisma.order.findMany()
}

export const addOrders = async ({ items, userEmail, userName }: OrderData) => {
    try {
        const totalPrice = items.reduce(
            (acc, item) => acc + item.price * item.quantity, 0);

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
    } catch (error) {
        console.error("Erro ao criar pedido:", error);
        throw error;
    }
}

export const updateOrder = async (id: string, status: string) => {
    try {
        return await prisma.order.update({
            where: {
                id
            },
            data: {
                status
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const deleteOrder = async (id: string) => {
    try {
        
        return await prisma.order.deleteMany({
            where:{
                status:"Concluído"
            }
        })

    } catch (error) {
        console.error(error)
    }
}