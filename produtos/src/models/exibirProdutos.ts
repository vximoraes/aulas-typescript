import chalk from 'chalk'
import { produtos } from "../data/produtos"

// Função para exibir produtos cadastrados.
export function exibirProdutos() {
    console.log('\n-------------------------| PRODUTOS |-------------------------\n')
    produtos.forEach((produto) => console.log(`${chalk.bold('Id:')} ${produto.id} \n${chalk.bold('Produto:')} ${produto.nome} \n${chalk.bold('Preço:')} ${chalk.green('R$')}${chalk.green(produto.preco.toFixed(2))}\n`))
    console.log('--------------------------------------------------------------\n')
}