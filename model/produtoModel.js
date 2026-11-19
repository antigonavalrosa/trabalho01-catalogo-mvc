// Lista inicial de produtos (vinda da Situação de Aprendizagem 1)
const produtos = [
  { id: 1, nome: "Caderno Universitário 10 Matérias", categoria: "Cadernos", preco: 25.90, estoque: 50 },
  { id: 2, nome: "Caneta Esferográfica Azul", categoria: "Escrita", preco: 2.50, estoque: 200 },
  { id: 3, nome: "Mochila Escolar Reforçada", categoria: "Acessórios", preco: 120.00, estoque: 15 }
];

// Retorna todos os produtos
function listarTodos() {
  return produtos;
}

// Busca um produto específico pelo ID
function buscarPorId(id) {
  return produtos.find((produto) => produto.id === id);
}

// Insere um novo produto gerando ID único automaticamente
function inserir(dadosProduto) {
  // Gera o próximo ID baseado no maior ID atual para evitar repetições
  const maiorId = produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) : 0;
  const novoId = maiorId + 1;

  const novoProduto = {
    id: novoId,
    nome: dadosProduto.nome,
    categoria: dadosProduto.categoria,
    preco: Number(dadosProduto.preco),
    estoque: Number(dadosProduto.estoque)
  };

  produtos.push(novoProduto);
  return novoProduto;
}

module.exports = {
  listarTodos,
  buscarPorId,
  inserir
};