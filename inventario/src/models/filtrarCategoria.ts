import { Produto } from '../models/Produto'
import { Categorias } from '../types/Categorias'

export function filtrarPorCategoria(produtos: Produto[], categoria: Categorias): Produto[] {
    let produtosFiltrados: Produto[] = produtos.filter((produto) => produto.categoria == categoria)

    console.log(`\n| PRODUTOS FILTRADOS PELA CATEGORIA '${categoria}' |`)

    produtosFiltrados.forEach((produto) => console.log(`\nId: ${produto.id} \nNome: ${produto.nome} \nPreço: ${produto.preco.toFixed(2)} \nQuantidade: ${produto.quantidade} \nCategoria: ${produto.categoria}`))
    
    return produtosFiltrados
}