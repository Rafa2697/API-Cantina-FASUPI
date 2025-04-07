"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderItem_controller_1 = require("../controllers/orderItem.controller");
const router = (0, express_1.Router)();
router.get("/orderItems", orderItem_controller_1.getOrdersItems);
router.post("/orderItems", orderItem_controller_1.createOrderItem);
router.put("/orderItems", orderItem_controller_1.updateOrdersItems);
router.delete("/orderItems", orderItem_controller_1.deleteOrdersItems);
exports.default = router;
//# sourceMappingURL=orderItem.routes.js.map