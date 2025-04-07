import express from 'express';
import dotenv from 'dotenv';
import routeUser from '../routes/user.routes';
import routeFood from '../routes/food.routes';
import routeCategory from '../routes/category.routes';
import routerOrder from '../routes/order.routes';
import routerOrderItem from '../routes/orderItem.routes';
import rootRouter from '../routes/root.routes';

const app = express();
const PORT =  process.env.PORT || 3000; // Define a porta do servidor, padrão 3000

dotenv.config(); // Carrega as variáveis de ambiente do .env

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
app.use(rootRouter); // Usando as rotas definidas no arquivo root.routes.ts
app.use(routeUser); // Usando as rotas definidas no arquivo user.routes.ts
app.use(routeFood);
app.use(routeCategory); // Usando as rotas definidas no arquivo category.routes.ts
app.use(routerOrder); // Usando as rotas definidas no arquivo order.routes.ts
app.use(routerOrderItem); // Usando as rotas definidas no arquivo orderItem.routes.ts

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
})
app.get('/test', (req, res) => {
    res.send('Teste funcionando!');
  });
export default app; // Exporta o app para ser usado em testes ou outros módulos