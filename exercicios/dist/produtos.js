"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const idProduto = (0, uuid_1.v4)();
const chalk_1 = __importDefault(require("chalk"));
// Array de produtos.
const produtos = [
    { id: idProduto, nome: 'Café 3 Corações Tradicional 500g', preco: 24.99 },
    { id: idProduto, nome: 'Pão de Queijo 10 Unidades', preco: 10.50 },
    { id: idProduto, nome: 'Requeijão Cremoso Tradicional', preco: 7.89 }
];
// Listar todos os produtos cadastrados.
console.log('\n-------------------------| PRODUTOS |-------------------------\n');
produtos.forEach((produto) => console.log(`${chalk_1.default.bold('Id:')} ${produto.id} \n${chalk_1.default.bold('Produto:')} ${produto.nome} \n${chalk_1.default.bold('Preço:')} ${chalk_1.default.green('R$')}${chalk_1.default.green(produto.preco)}\n`));
console.log('--------------------------------------------------------------\n');
