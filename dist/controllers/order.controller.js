"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrders = exports.updateOrders = exports.createOrder = exports.getOrders = void 0;
const orders_service_1 = require("../services/orders.service");
const getOrders = async (req, res) => {
    try {
        const orders = await (0, orders_service_1.getAllOrders)();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
};
exports.getOrders = getOrders;
const createOrder = async (req, res) => {
    const { items, userEmail, userName } = req.body;
    try {
        const user = await (0, orders_service_1.addOrders)({ items, userEmail, userName });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar pedido" });
    }
};
exports.createOrder = createOrder;
const updateOrders = async (req, res) => {
    const { id, status } = req.body;
    try {
        const order = await (0, orders_service_1.updateOrder)(id, status);
        res.status(200).json(order);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar pedido" });
    }
};
exports.updateOrders = updateOrders;
const deleteOrders = async (req, res) => {
    const { status } = req.body;
    try {
        if (status === "Concluído") {
            const order = await (0, orders_service_1.deleteOrder)(status);
            res.status(200).json(order);
        }
        else {
            res.status(302).json("Não tem pedidos concluídos");
        }
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao deletar pedido" });
    }
};
exports.deleteOrders = deleteOrders;
//# sourceMappingURL=order.controller.js.map