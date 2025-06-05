"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const criarProduto_1 = require("./models/criarProduto");
const exibirProdutos_1 = require("./models/exibirProdutos");
(0, criarProduto_1.criarProduto)((0, uuid_1.v4)(), 'Café 3 Corações Tradicional 500g', 24.99);
(0, criarProduto_1.criarProduto)((0, uuid_1.v4)(), 'Pão de Queijo 10 Unidades', 10.50);
(0, criarProduto_1.criarProduto)((0, uuid_1.v4)(), 'Requeijão Cremoso Tradicional', 7.89);
(0, exibirProdutos_1.exibirProdutos)();
