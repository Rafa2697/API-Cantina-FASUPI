import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller";
const router = Router();
router.get("/admin", getUsers);
router.post("/admin", createUser);
export default router;
//# sourceMappingURL=user.routes.js.map