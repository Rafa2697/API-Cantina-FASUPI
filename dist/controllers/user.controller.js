"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_service_1 = require("../services/user.service");
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
        const user = await (0, user_service_1.addUser)(name, email, password, image);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
    }
};
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map