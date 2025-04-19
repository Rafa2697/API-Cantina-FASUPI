import { Router, Request, Response } from "express";
import { getOrders, createOrder, updateOrders, deleteOrders } from "../controllers/order.controller";

const router = Router();

router.get("/orders", getOrders as any);
router.post("/orders", createOrder as any);
router.put("/orders", updateOrders as any);
router.delete("/orders", deleteOrders as any);

export default router;