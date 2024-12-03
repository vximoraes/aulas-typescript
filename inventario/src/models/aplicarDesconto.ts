import { Produto } from "../models/Produto"

export function aplicarDesconto(produtos: Produto[], desconto: number): Produto[] {
    let conversaoDesconto = desconto / 100
    const produtosComDesconto = produtos.map(produto => { 
        produto.preco = parseFloat((produto.preco - produto.preco  * conversaoDesconto).toFixed(2))
        return produto
    })

    console.log('\n| APÓS ADICIONAR DESCONTO |')
    
    return produtosComDesconto
}