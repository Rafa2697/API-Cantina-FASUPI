import { Router } from 'express';
import { createUser, loginAdmin } from "../controllers/user.controller";

const router = Router();

router.post("/admin", createUser);
router.post("/login", loginAdmin);

export default router;