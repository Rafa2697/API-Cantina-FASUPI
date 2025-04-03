import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.ts";

const router = Router();

router.get("/admin", getUsers);
router.post("/admin", createUser);

export default router;