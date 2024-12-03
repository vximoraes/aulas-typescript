import { Produto } from '../models/Produto'
import { produtos } from '../data/produtos'

// Classe Inventário.
export class Inventario {
    public addProduto(produto: Produto): void {
        produtos.push(produto)
    }
    
    public listarProdutos(): void {
        console.log('\n| PRODUTOS CADASTRADOS |')
        produtos.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco.toFixed(2)} \nQuantidade: ${produto.quantidade}`))
    }
    
    public removerProduto(id: string): void {
        const filtroInventario = produtos.findIndex((produto) => produto.id == id)
            
        if (filtroInventario !== -1) {
            produtos.splice(filtroInventario, 1)
        }
    }
    
    public atualizarQuantidade(id: string, quantidade: number): void {
        const produto = produtos.find((produto) => produto.id === id) 

        if (produto) {
            produto.quantidade = quantidade
            console.log(`\nProduto '${produto.nome}' atualizado com sucesso para quantidade ${quantidade}.`)
        } else {
            console.log(`Produto com id '${id}' não encontrado.`) 
        }
    }
    
    public getValorTotal(): number {
        let valorTotalProdutos: number = 0
        produtos.forEach((produto) => valorTotalProdutos += produto.preco)

        console.log(`\n| VALOR TOTAL DOS PRODUTOS CADASTRADOS | \n\n${valorTotalProdutos.toFixed(2)}`)
        return valorTotalProdutos
    }
}