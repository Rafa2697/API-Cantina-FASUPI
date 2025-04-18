"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = exports.createUser = exports.getUsers = void 0;
const user_service_1 = require("../services/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta";
const getUsers = async (req, res) => {
    try {
        const users = await (0, user_service_1.getAllUsers)();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const { name, email, password, image } = req.body;
    try {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await (0, user_service_1.addUser)(name, email, hashedPassword, image);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
    }
};
exports.createUser = createUser;
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Buscar o admin no banco de dados
        const admin = await (0, user_service_1.getUserByEmail)(email);
        if (!admin) {
            res.status(401).json({ error: "Email ou senha inválidos" });
            return;
        }
        if (!admin.password) {
            res.status(401).json({ error: "Email ou senha inválidos" });
            return;
        }
        const passwordMatch = await bcrypt_1.default.compare(password, admin.password);
        if (!passwordMatch) {
            res.status(401).json({ error: "Email ou senha inválidos" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email }, JWT_SECRET, { expiresIn: "7d" } // ou "1h", "30d", etc.
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
    }
    catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.loginAdmin = loginAdmin;
//# sourceMappingURL=user.controller.js.map