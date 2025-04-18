import { Request, Response } from "express";
import { getAllOrders, addOrders, updateOrder, deleteOrder } from "../services/orders.service";
import { stat } from "fs";

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
}

export const createOrder = async (req: Request, res: Response) => {
    const { items, userEmail, userName } = req.body;
    try {
        const user = await addOrders({ items, userEmail, userName });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar pedido" });

    }
}

export const updateOrders = async (req: Request, res: Response) => {
    const { id, status } = req.body;
    try {
        const order = await updateOrder(id, status);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar pedido" });
    }
}

export const deleteOrders = async (req: Request, res: Response) => {
    const { status } = req.body;
    try {
        if (status === "Concluído") {
            const order = await deleteOrder(status);
            res.status(200).json(order);
        }
        else{
            res.status(302).json("Não tem pedidos concluídos")
        }

    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar pedido" });
    }
}
