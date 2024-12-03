"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarPorCategoria = filtrarPorCategoria;
function filtrarPorCategoria(produtos, categoria) {
    let produtosFiltrados = produtos.filter((produto) => produto.categoria == categoria);
    console.log(`\n| PRODUTOS FILTRADOS PELA CATEGORIA '${categoria}' |`);
    produtosFiltrados.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco.toFixed(2)} \nQuantidade: ${produto.quantidade} \nCategoria: ${produto.categoria}`));
    return produtosFiltrados;
}
