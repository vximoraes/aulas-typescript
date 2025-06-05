"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicarDesconto = aplicarDesconto;
function aplicarDesconto(produtos, desconto) {
    let conversaoDesconto = desconto / 100;
    const produtosComDesconto = produtos.map(produto => {
        produto.preco = parseFloat((produto.preco - produto.preco * conversaoDesconto).toFixed(2));
        return produto;
    });
    console.log('\n| APÓS ADICIONAR DESCONTO |');
    return produtosComDesconto;
}
