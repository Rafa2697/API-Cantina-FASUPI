"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const food_controller_1 = require("../controllers/food.controller");
const router = (0, express_1.Router)();
router.get("/foods", food_controller_1.getFoods);
router.post("/foods", food_controller_1.createFood);
router.delete("/foods/:id", food_controller_1.removeFood);
router.put("/foods/:id", food_controller_1.editFood);
exports.default = router;
//# sourceMappingURL=food.routes.js.map