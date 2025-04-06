import { Request, Response } from "express";
import { getAllUsers, addUser } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, image  } = req.body;
  try {
    const user = await addUser(name, email, password, image);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
};
