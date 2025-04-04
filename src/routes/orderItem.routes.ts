import { Router } from "express";
import {getOrdersItems, createOrderItem, deleteOrdersItems, updateOrdersItems} from "../controllers/orderItem.controller.ts";

const router = Router();

router.get("/orderItems", getOrdersItems);
router.post("/orderItems", createOrderItem);
router.put("/orderItems", updateOrdersItems);
router.delete("/orderItems", deleteOrdersItems);

export default router;