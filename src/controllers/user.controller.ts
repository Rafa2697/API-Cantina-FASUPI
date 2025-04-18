import { Request, Response } from "express";
import { getAllUsers, addUser, getUserByEmail } from "../services/user.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta";

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await addUser(name, email, hashedPassword, image);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
};

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
      // Buscar o admin no banco de dados
      const admin = await getUserByEmail(email);
      
      if (!admin) {
          res.status(401).json({ error: "Email ou senha inválidos" });
          return 
      }

      if (!admin.password) {
        res.status(401).json({ error: "Email ou senha inválidos" });
        return;
      }
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!passwordMatch) {
        res.status(401).json({ error: "Email ou senha inválidos" });
        return;
      }

      const token = jwt.sign(
        { id: admin.id, email: admin.email },
        JWT_SECRET,
        { expiresIn: "7d" } // ou "1h", "30d", etc.
      );


      res.status(200).json({
        token,
        user: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          image: admin.image,
        },
      });
  } catch (error) {
      res.status(500).json({ error: "Erro interno no servidor" });
  }
};