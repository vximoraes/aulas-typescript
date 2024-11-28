import { Produto } from './inventario';
import { Inventario } from './inventario';
import { produto1 } from './inventario';
import { produto2 } from './inventario';
import { produto3 } from './inventario';

function aplicarDesconto(produtos: Produto[], desconto: number): Produto[] {
    let produtosSelecionados: Produto[] = []
    let descontoAplicado: number = desconto / 100
    produtos.map((produto) => { 
        const precoComDesconto = produto.preco - produto.preco * descontoAplicado 
    })
}