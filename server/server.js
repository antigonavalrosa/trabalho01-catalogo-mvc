const express = require('express');
const produtoController = require('../controller/controller');

const app = express();
const PORTA = 3366;

// Middleware essencial para interpretar o corpo (body) das requisições em JSON
app.use(express.json());

// Rotas da API
app.get('/produtos', produtoController.listarProdutos);
app.get('/produtos/:id', produtoController.buscarProdutoPorId);
app.post('/produtos', produtoController.cadastrarProduto);

// Inicialização do servidor
app.listen(PORTA, () => {
  console.log(`Servidor da Papelaria Saber rodando em http://localhost:${PORTA}`);
});