import { Request, Response } from "express";
import { getAllUsers, addUser, getUserByEmail } from "../services/user.service";

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

export const loginAdmin = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
      // Buscar o admin no banco de dados
      const admin = await getUserByEmail(email);
      
      if (!admin) {
          return res.status(401).json({ error: "Email ou senha inválidos" });
      }


      res.status(200).json({
          id: admin.id,
          name: admin.name,
          email: admin.email,
          password: admin.password,
          image: admin.image,
      });
  } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({ error: "Erro interno no servidor" });
  }
};