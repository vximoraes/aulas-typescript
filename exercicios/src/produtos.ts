import { v4 as uuid } from 'uuid'
const idProduto: string = uuid()
import chalk from 'chalk'

// Interface de um Produto.
interface Produto {
    id: string,
    nome: string,
    preco: number   
}

// Array de produtos.
const produtos: Produto[] = [
    { id: idProduto, nome: 'Café 3 Corações Tradicional 500g', preco: 24.99 },
    { id: idProduto, nome: 'Pão de Queijo 10 Unidades'       , preco: 10.50 },
    { id: idProduto, nome: 'Requeijão Cremoso Tradicional'   , preco: 7.89  }
]

// Listar todos os produtos cadastrados.
console.log('\n-------------------------| PRODUTOS |-------------------------\n')
produtos.forEach((produto) => console.log(`${chalk.bold('Id:')} ${produto.id} \n${chalk.bold('Produto:')} ${produto.nome} \n${chalk.bold('Preço:')} ${chalk.green('R$')}${chalk.green(produto.preco)}\n`))
console.log('--------------------------------------------------------------\n')