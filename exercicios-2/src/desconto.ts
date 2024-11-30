import { Produto } from './inventario';

function aplicarDesconto(produtos: Produto[], desconto: number): Produto[] {
    let conversaoDesconto = desconto / 100;
    produtos.map(produto => produto.preco -= produto.preco * conversaoDesconto);
    console.log('\n| APÓS ADICIONAR DESCONTO |')
    return produtos;
}

export { aplicarDesconto }