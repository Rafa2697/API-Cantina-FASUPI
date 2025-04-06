import { getAllFoods, addFood, deleteFood, updateFood } from "../services/food.service";
export const getFoods = async (req, res) => {
    try {
        const foods = await getAllFoods();
        res.json(foods);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar alimentos" });
    }
};
export const createFood = async (req, res) => {
    const { name, description, price, imagemURL, categoryId, isAvailable } = req.body;
    try {
        const food = await addFood(name, description, price, imagemURL, categoryId, isAvailable);
        res.status(201).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar alimento" });
    }
};
export const removeFood = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await deleteFood(id);
        res.status(200).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao deletar alimento" });
    }
};
export const editFood = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imagemURL, categoryId, isAvailable } = req.body;
    try {
        const food = await updateFood({ id, name, description, price, imagemURL, categoryId, isAvailable });
        res.status(200).json(food);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao editar alimento" });
    }
};
//# sourceMappingURL=food.controller.js.map