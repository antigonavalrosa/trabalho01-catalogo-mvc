const express = require('express');
const produtoController = require('../controller/produtoController');

const app = express();
const porta = 3366;

app.get('/produtos', produtoController.listarProdutos);

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
