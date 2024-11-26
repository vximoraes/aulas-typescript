import { v4 as uuid } from 'uuid'
const idProduto: string = uuid()
import chalk from 'chalk'

interface Produto {
    id: string,
    nome: string,
    preco: number   
}

const produtos: Produto[] = [
    { id: idProduto, nome: 'Café 3 Corações Tradicional 500g', preco: 24.99 },
    { id: idProduto, nome: 'Pão de Queijo 10 Unidades'       , preco: 10.50 },
    { id: idProduto, nome: 'Requeijão Cremoso Tradicional'   , preco: 7.89  }
]

produtos.forEach((produto) => console.log(`Id: ${chalk.bold(produto.id)} \nProduto: ${produto.nome} \nPreço: R$${produto.preco}\n`))
