const produtos = require('./produtos.json');

function buscarTodos() {
  return produtos;
}

module.exports = {
  buscarTodos
};
