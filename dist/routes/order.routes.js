import { Router } from "express";
import { getOrders, createOrder, updateOrders, deleteOrders } from "../controllers/order.controller";
const router = Router();
router.get("/orders", getOrders);
router.post("/orders", createOrder);
router.put("/orders", updateOrders);
router.delete("/orders", deleteOrders);
export default router;
//# sourceMappingURL=order.routes.js.map