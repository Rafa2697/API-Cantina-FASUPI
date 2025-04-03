import { Router } from "express";
import { getFoods, createFood, removeFood, editFood } from "../controllers/food.controller.ts";

const router = Router();

router.get("/foods", getFoods);
router.post("/foods", createFood);
router.delete("/foods/:id", removeFood);
router.put("/foods/:id", editFood);

export default router;