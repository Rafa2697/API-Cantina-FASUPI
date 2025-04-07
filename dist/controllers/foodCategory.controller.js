"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = exports.getCategories = void 0;
const foodCategory_service_1 = require("../services/foodCategory.service");
const getCategories = async (req, res) => {
    try {
        const categories = await (0, foodCategory_service_1.getAllCategories)();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};
exports.getCategories = getCategories;
const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await (0, foodCategory_service_1.addCategory)(name);
        res.status(201).json(category);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar categoria' });
    }
};
exports.createCategory = createCategory;
//# sourceMappingURL=foodCategory.controller.js.map