"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const produtos_1 = require("../data/produtos");
// Classe Inventário.
class Inventario {
    addProduto(produto) {
        produtos_1.produtos.push(produto);
    }
    listarProdutos() {
        console.log('\n| PRODUTOS CADASTRADOS |');
        produtos_1.produtos.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco.toFixed(2)} \nQuantidade: ${produto.quantidade}`));
    }
    removerProduto(id) {
        const filtroInventario = produtos_1.produtos.findIndex((produto) => produto.id == id);
        if (filtroInventario !== -1) {
            produtos_1.produtos.splice(filtroInventario, 1);
        }
    }
    atualizarQuantidade(id, quantidade) {
        const produto = produtos_1.produtos.find((produto) => produto.id === id);
        if (produto) {
            produto.quantidade = quantidade;
            console.log(`\nProduto '${produto.nome}' atualizado com sucesso para quantidade ${quantidade}.`);
        }
        else {
            console.log(`Produto com id '${id}' não encontrado.`);
        }
    }
    getValorTotal() {
        let valorTotalProdutos = 0;
        produtos_1.produtos.forEach((produto) => valorTotalProdutos += produto.preco);
        console.log(`\n| VALOR TOTAL DOS PRODUTOS CADASTRADOS | \n\n${valorTotalProdutos.toFixed(2)}`);
        return valorTotalProdutos;
    }
}
exports.Inventario = Inventario;
