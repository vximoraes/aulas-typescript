"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirProdutos = exibirProdutos;
const chalk_1 = __importDefault(require("chalk"));
const produtos_1 = require("../data/produtos");
// Função para exibir produtos cadastrados.
function exibirProdutos() {
    console.log('\n-------------------------| PRODUTOS |-------------------------\n');
    produtos_1.produtos.forEach((produto) => console.log(`${chalk_1.default.bold('Id:')} ${produto.id} \n${chalk_1.default.bold('Produto:')} ${produto.nome} \n${chalk_1.default.bold('Preço:')} ${chalk_1.default.green('R$')}${chalk_1.default.green(produto.preco.toFixed(2))}\n`));
    console.log('--------------------------------------------------------------\n');
}
