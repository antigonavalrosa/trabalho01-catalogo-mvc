const produtoModel = require('../model/produtoModel');

// GET /produtos
function listarProdutos(req, res) {
  const produtos = produtoModel.listarTodos();
  return res.status(200).json(produtos);
}

// GET /produtos/:id
function buscarProdutoPorId(req, res) {
  const id = Number(req.params.id);

  // Validação opcional caso o ID não seja um número válido
  if (isNaN(id)) {
    return res.status(400).json({ erro: "O código (id) informado deve ser um número válido." });
  }

  const produto = produtoModel.buscarPorId(id);

  if (!produto) {
    return res.status(404).json({ erro: `Produto com código ${id} não encontrado.` });
  }

  return res.status(200).json(produto);
}

// POST /produtos
function cadastrarProduto(req, res) {
  const { nome, categoria, preco, estoque } = req.body;

  // Validação: verifica se algum campo obrigatório está ausente ou vazio
  if (
    !nome ||
    !categoria ||
    preco === undefined ||
    preco === null ||
    estoque === undefined ||
    estoque === null
  ) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios: nome, categoria, preco e estoque."
    });
  }

  const novoProduto = produtoModel.inserir({ nome, categoria, preco, estoque });

  return res.status(201).json(novoProduto);
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  cadastrarProduto
};