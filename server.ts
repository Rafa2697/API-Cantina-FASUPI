import express from 'express';
import dotenv from 'dotenv';
import routeUser from './src/routes/user.routes.ts';
import routeFood from './src/routes/food.routes.ts';
import routeCategory from './src/routes/category.routes.ts';

const app = express();
const PORT =  3000;

dotenv.config(); // Carrega as variáveis de ambiente do .env

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
app.use(routeUser); // Usando as rotas definidas no arquivo user.routes.ts
app.use(routeFood);
app.use(routeCategory); // Usando as rotas definidas no arquivo category.routes.ts

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
})