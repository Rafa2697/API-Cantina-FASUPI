"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foodCategory_controller_1 = require("../controllers/foodCategory.controller");
const router = (0, express_1.Router)();
router.get("/categories", foodCategory_controller_1.getCategories);
router.post("/categories", foodCategory_controller_1.createCategory);
exports.default = router;
//# sourceMappingURL=category.routes.js.map