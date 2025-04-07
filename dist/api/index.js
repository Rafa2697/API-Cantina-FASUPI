"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const food_routes_1 = __importDefault(require("../routes/food.routes"));
const category_routes_1 = __importDefault(require("../routes/category.routes"));
const order_routes_1 = __importDefault(require("../routes/order.routes"));
const orderItem_routes_1 = __importDefault(require("../routes/orderItem.routes"));
const root_routes_1 = __importDefault(require("../routes/root.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // Define a porta do servidor, padrão 3000
dotenv_1.default.config(); // Carrega as variáveis de ambiente do .env
app.use(express_1.default.json()); // Middleware para analisar JSON no corpo das requisições
app.use(root_routes_1.default); // Usando as rotas definidas no arquivo root.routes.ts
app.use(user_routes_1.default); // Usando as rotas definidas no arquivo user.routes.ts
app.use(food_routes_1.default);
app.use(category_routes_1.default); // Usando as rotas definidas no arquivo category.routes.ts
app.use(order_routes_1.default); // Usando as rotas definidas no arquivo order.routes.ts
app.use(orderItem_routes_1.default); // Usando as rotas definidas no arquivo orderItem.routes.ts
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});
app.get('/test', (req, res) => {
    res.send('Teste funcionando!');
});
exports.default = app; // Exporta o app para ser usado em testes ou outros módulos
//# sourceMappingURL=index.js.map