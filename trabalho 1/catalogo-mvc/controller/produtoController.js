const produtoModel = require('../model/produtoModel');

function listarProdutos(req, res) {
  const dados = produtoModel.buscarTodos();
  res.json(dados);
}

module.exports = {
  listarProdutos
};
