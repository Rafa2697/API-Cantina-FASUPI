import { getAllOrderItems, addOrderItem, deleteOrderItem, updateOrderItem } from "../services/orderItem.service";
export const getOrdersItems = async (req, res) => {
    try {
        const orderItems = await getAllOrderItems();
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar itens do pedido" });
    }
};
export const createOrderItem = async (req, res) => {
    const { orderId, quantity, price, foodId, name, subtotal } = req.body;
    try {
        const orderItem = await addOrderItem({
            orderId,
            quantity,
            price,
            foodId,
            name,
            subtotal
        });
        res.status(201).json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar item do pedido" });
    }
};
export const deleteOrdersItems = async (req, res) => {
    const { id } = req.body;
    try {
        const orderItem = await deleteOrderItem(id);
        res.status(200).json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao deletar item do pedido" });
    }
};
export const updateOrdersItems = async (req, res) => {
    const { id, orderId, foodId, name, price, quantity, subtotal } = req.body;
    try {
        const orderItem = await updateOrderItem({
            id,
            orderId,
            foodId,
            name,
            price,
            quantity,
            subtotal
        });
        res.status(200).json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar item do pedido" });
    }
};
//# sourceMappingURL=orderItem.controller.js.map