"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrdersItems = exports.deleteOrdersItems = exports.createOrderItem = exports.getOrdersItems = void 0;
const orderItem_service_1 = require("../services/orderItem.service");
const getOrdersItems = async (req, res) => {
    try {
        const orderItems = await (0, orderItem_service_1.getAllOrderItems)();
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar itens do pedido" });
    }
};
exports.getOrdersItems = getOrdersItems;
const createOrderItem = async (req, res) => {
    const { orderId, quantity, price, foodId, name, subtotal } = req.body;
    try {
        const orderItem = await (0, orderItem_service_1.addOrderItem)({
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
exports.createOrderItem = createOrderItem;
const deleteOrdersItems = async (req, res) => {
    const { id } = req.body;
    try {
        const orderItem = await (0, orderItem_service_1.deleteOrderItem)(id);
        res.status(200).json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao deletar item do pedido" });
    }
};
exports.deleteOrdersItems = deleteOrdersItems;
const updateOrdersItems = async (req, res) => {
    const { id, orderId, foodId, name, price, quantity, subtotal } = req.body;
    try {
        const orderItem = await (0, orderItem_service_1.updateOrderItem)({
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
exports.updateOrdersItems = updateOrdersItems;
//# sourceMappingURL=orderItem.controller.js.map