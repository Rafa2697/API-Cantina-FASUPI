"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFood = exports.removeFood = exports.createFood = exports.getFoods = void 0;
const food_service_1 = require("../services/food.service");
const getFoods = async (req, res) => {
    try {
        const foods = await (0, food_service_1.getAllFoods)();
        res.json(foods);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar alimentos" });
    }
};
exports.getFoods = getFoods;
const createFood = async (req, res) => {
    const { name, description, price, imagemURL, categoryId, isAvailable } = req.body;
    try {
        const food = await (0, food_service_1.addFood)(name, description, price, imagemURL, categoryId, isAvailable);
        res.status(201).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar alimento" });
    }
};
exports.createFood = createFood;
const removeFood = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await (0, food_service_1.deleteFood)(id);
        res.status(200).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao deletar alimento" });
    }
};
exports.removeFood = removeFood;
const editFood = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imagemURL, categoryId, isAvailable } = req.body;
    try {
        const food = await (0, food_service_1.updateFood)({ id, name, description, price, imagemURL, categoryId, isAvailable });
        res.status(200).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao editar alimento" });
    }
};
exports.editFood = editFood;
//# sourceMappingURL=food.controller.js.map