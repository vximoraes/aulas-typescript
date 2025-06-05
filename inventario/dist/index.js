"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const aplicarDesconto_1 = require("./models/aplicarDesconto");
const filtrarCategoria_1 = require("./models/filtrarCategoria");
const Categorias_1 = require("./types/Categorias");
const produtos_1 = require("./data/produtos");
const Inventario_1 = require("./models/Inventario");
const inventario = new Inventario_1.Inventario();
// Adicionando 3 produtos ao inventário.
const produto1 = {
    id: (0, uuid_1.v4)(),
    nome: 'Produto 1',
    preco: 10.10,
    quantidade: 1,
    categoria: Categorias_1.Categorias.ELETRONICOS
};
const produto2 = {
    id: (0, uuid_1.v4)(),
    nome: 'Produto 2',
    preco: 20.20,
    quantidade: 2,
    categoria: Categorias_1.Categorias.ELETRONICOS
};
const produto3 = {
    id: 'idProduto3', // Id teste para excluir produto enquanto o nodemon está em execução.
    nome: 'Produto 3',
    preco: 30.30,
    quantidade: 3,
    categoria: Categorias_1.Categorias.ELETRONICOS
};
let produto4 = {
    id: (0, uuid_1.v4)(),
    nome: 'Produto 4',
    preco: 40.40,
    quantidade: 4,
    categoria: Categorias_1.Categorias.ALIMENTOS
};
let produto5 = {
    id: (0, uuid_1.v4)(),
    nome: 'Produto 5',
    preco: 5.50,
    quantidade: 5,
    categoria: Categorias_1.Categorias.ROUPAS
};
inventario.addProduto(produto1);
inventario.addProduto(produto2);
inventario.addProduto(produto3);
inventario.addProduto(produto4);
inventario.addProduto(produto5);
// Atualizando a quantidade de um dos produtos.
inventario.atualizarQuantidade('idProduto3', 100);
// Listando todos os produtos cadastrados.
inventario.listarProdutos();
// Imprimindo o valor total do inventário.
inventario.getValorTotal();
// Removendo um produto do inventário.
inventario.removerProduto('idProduto3');
inventario.listarProdutos();
inventario.getValorTotal();
// Testando a função de desconto.
(0, aplicarDesconto_1.aplicarDesconto)(produtos_1.produtos, 15);
inventario.listarProdutos();
inventario.getValorTotal();
// Testando a função de filtrar um produto pela categoria.
(0, filtrarCategoria_1.filtrarPorCategoria)(produtos_1.produtos, Categorias_1.Categorias.ELETRONICOS);
