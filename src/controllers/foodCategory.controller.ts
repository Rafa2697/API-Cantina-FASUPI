import {Request, Response} from 'express';
import {getAllCategories, addCategory} from '../services/foodCategory.service.ts';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
        
    }
}

export const createCategory = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const category = await addCategory(name);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar categoria' });
    }
}