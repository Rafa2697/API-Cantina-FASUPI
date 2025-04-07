"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/admin", user_controller_1.getUsers);
router.post("/admin", user_controller_1.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map