import { v4 as uuid } from 'uuid'
import { aplicarDesconto } from './desconto'
import { filtrarPorCategoria } from './filtrar-categoria'

// Enum Categorias.
enum Categorias {
    ELETRONICOS = 'Eletrônicos',
    ALIMENTOS = 'Alimentos',
    ROUPAS = 'Roupas'
}

// Interface Produto.
interface Produto {
    id: string
    nome: string
    preco: number
    quantidade: number
    categoria: Categorias
}

let inventarioProdutos: Produto[] = []

// Classe Inventário.
class Inventario {
    public addProduto(produto: Produto): void {
        inventarioProdutos.push(produto)
    }
    
    public listarProdutos(): void {
        console.log('\n| PRODUTOS CADASTRADOS |')
        inventarioProdutos.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco.toFixed(2)} \nQuantidade: ${produto.quantidade}`))
    }
    
    public removerProduto(id: string): void {
        const filtroInventario = inventarioProdutos.findIndex((produto) => produto.id == id)
            
        if (filtroInventario !== -1) {
            inventarioProdutos.splice(filtroInventario, 1)
        }
    }
    
    public atualizarQuantidade(id: string, quantidade: number): void {
        const produto = inventarioProdutos.find((produto) => produto.id === id) 

        if (produto) {
            produto.quantidade = quantidade
            console.log(`\nProduto '${produto.nome}' atualizado com sucesso para quantidade ${quantidade}.`)
        } else {
            console.log(`Produto com id '${id}' não encontrado.`) 
        }
    }
    
    public getValorTotal(): number {
        let valorTotalProdutos: number = 0
        inventarioProdutos.forEach((produto) => valorTotalProdutos += produto.preco)

        console.log(`\n| VALOR TOTAL DOS PRODUTOS CADASTRADOS | \n\n${valorTotalProdutos.toFixed(2)}`)
        return valorTotalProdutos
    }
}

const inventario = new Inventario()

// Adicionando 3 produtos ao inventário.
let produto1: Produto = {
    id: uuid(),
    nome: 'Produto 1',
    preco: 10.10,
    quantidade: 1,
    categoria: Categorias.ELETRONICOS
}

let produto2: Produto = {
    id: uuid(),
    nome: 'Produto 2',
    preco: 20.20,
    quantidade: 2,
    categoria: Categorias.ELETRONICOS
}

let produto3: Produto = {
    id: 'idProduto3', // Id teste para excluir produto enquanto o nodemon está em execução.
    nome: 'Produto 3',
    preco: 30.30,
    quantidade: 3,
    categoria: Categorias.ELETRONICOS
}

let produto4 = { 
    id:  uuid(),
    nome: 'Produto 4', 
    preco: 40.40, 
    quantidade: 4,
    categoria: Categorias.ALIMENTOS 
}

let produto5 = { 
    id:  uuid(), 
    nome: 'Produto 5', 
    preco: 5.50, 
    quantidade: 5,
    categoria: Categorias.ROUPAS 
}

inventario.addProduto(produto1)
inventario.addProduto(produto2)
inventario.addProduto(produto3)
inventario.addProduto(produto4)
inventario.addProduto(produto5)

// Atualizando a quantidade de um dos produtos.
inventario.atualizarQuantidade('idProduto3', 100)

// Listando todos os produtos cadastrados.
inventario.listarProdutos()

// Imprimindo o valor total do inventário.
inventario.getValorTotal()

// Removendo um produto do inventário.
inventario.removerProduto('idProduto3')

inventario.listarProdutos()
inventario.getValorTotal()

// Testando a função de desconto.
aplicarDesconto(inventarioProdutos, 15)

inventario.listarProdutos()
inventario.getValorTotal()

// Testando a função de filtrar um produto pela categoria.

filtrarPorCategoria(inventarioProdutos, Categorias.ELETRONICOS)

// Exports
export { Produto }
export { Categorias }