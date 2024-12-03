import { v4 as uuid } from 'uuid'
import { aplicarDesconto } from './models/aplicarDesconto'
import { filtrarPorCategoria } from './models/filtrarCategoria'
import { Categorias } from './types/Categorias'
import { Produto } from './models/Produto'
import { produtos } from './data/produtos'
import { Inventario } from './models/Inventario'

// Novo objeto da classe Inventário.
const inventario = new Inventario()

// Adicionando 5 produtos ao inventário.
const produto1: Produto = {
    id: uuid(),
    nome: 'Produto 1',
    preco: 10.10,
    quantidade: 1,
    categoria: Categorias.ELETRONICOS
}

const produto2: Produto = {
    id: uuid(),
    nome: 'Produto 2',
    preco: 20.20,
    quantidade: 2,
    categoria: Categorias.ELETRONICOS
}

const produto3: Produto = {
    id: 'idProduto3', // Id teste para excluir produto enquanto o nodemon está em execução.
    nome: 'Produto 3',
    preco: 30.30,
    quantidade: 3,
    categoria: Categorias.ELETRONICOS
}

const produto4 = { 
    id:  uuid(),
    nome: 'Produto 4', 
    preco: 40.40, 
    quantidade: 4,
    categoria: Categorias.ALIMENTOS 
}

const produto5 = { 
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
aplicarDesconto(produtos, 15)

inventario.listarProdutos()
inventario.getValorTotal()

// Testando a função de filtrar um produto pela categoria.

filtrarPorCategoria(produtos, Categorias.ELETRONICOS)