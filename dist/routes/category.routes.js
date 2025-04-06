import { Router } from "express";
import { getCategories, createCategory } from "../controllers/foodCategory.controller";
const router = Router();
router.get("/categories", getCategories);
router.post("/categories", createCategory);
export default router;
//# sourceMappingURL=category.routes.js.map