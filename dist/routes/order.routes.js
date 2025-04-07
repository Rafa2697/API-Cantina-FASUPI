"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
router.get("/orders", order_controller_1.getOrders);
router.post("/orders", order_controller_1.createOrder);
router.put("/orders", order_controller_1.updateOrders);
router.delete("/orders", order_controller_1.deleteOrders);
exports.default = router;
//# sourceMappingURL=order.routes.js.map