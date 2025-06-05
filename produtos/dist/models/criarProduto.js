"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarProduto = criarProduto;
const produtos_1 = require("../data/produtos");
// Função para criar novo produto.
function criarProduto(id, nome, preco) {
    const novoProduto = {
        id: id,
        nome: nome,
        preco: preco
    };
    produtos_1.produtos.push(novoProduto);
}
