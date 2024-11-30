import { v4 as uuid } from 'uuid'
import { aplicarDesconto } from './desconto'

interface Produto {
    id: string
    nome: string
    preco: number
    quantidade: number
}

class Inventario {
    private inventario: Produto[] = []

    public addProduto(produto: Produto): void {
        this.inventario.push(produto)
        console.log(`\n| PRODUTO ADICIONADO AO INVENTÁRIO | \n\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco} \nQuantidade: ${produto.quantidade}`)
    }
    
    public listarProdutos(): void {
        console.log('\n| PRODUTOS CADASTRADOS |')
        this.inventario.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco} \nQuantidade: ${produto.quantidade}`))
    }
    
    public removerProduto(id: string): void {
        const filtroInventario = this.inventario.findIndex((produto) => produto.id == id)
            
        if (filtroInventario !== -1) {
            this.inventario.splice(filtroInventario, 1)
        }
    }
    
    public atualizarQuantidade(id: string, quantidade: number): void {
        const inventarioFiltro = this.inventario.filter((produto) => produto.id == id)
        this.inventario.forEach((produto) => produto.quantidade = quantidade)
        inventarioFiltro.forEach((produto) => console.log(`\nProduto '${produto.nome}' atualizado com sucesso.'`))
    }
    
    public getValorTotal(): number {
        let valorTotalProdutos: number = 0
        this.inventario.forEach((produto) => valorTotalProdutos += produto.preco)
        console.log(`\n| VALOR TOTAL DOS PRODUTOS CADASTRADOS | \n\n${valorTotalProdutos.toFixed(2)}`)
        return valorTotalProdutos
    }
}

const inventario = new Inventario()

// Adicionando 3 produtos ao inventário.
let produto1: Produto = {
    id: uuid(),
    nome: 'Produto 1',
    preco: 10.50,
    quantidade: 1
}

let produto2: Produto = {
    id: uuid(),
    nome: 'Produto 2',
    preco: 20.50,
    quantidade: 2
}

let produto3: Produto = {
    id: 'idProduto3', // Id teste para excluir produto enquanto o nodemon está em execução.
    nome: 'Produto 3',
    preco: 30.50,
    quantidade: 3
}

inventario.addProduto(produto1)
inventario.addProduto(produto2)
inventario.addProduto(produto3)

// Listando todos os produtos cadastrados.

inventario.listarProdutos()

// Imprimindo o valor total do inventário.

inventario.getValorTotal()

// Removendo um produto do inventário.

inventario.removerProduto('idProduto3')

inventario.listarProdutos()
inventario.getValorTotal()

// Testando as função de desconto.

aplicarDesconto([produto1, produto2], 20)

inventario.listarProdutos()
inventario.getValorTotal()

export { Produto }