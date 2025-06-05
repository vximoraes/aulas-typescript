import { Produto } from "./Produto"
import { produtos } from "../data/produtos"

// Função para criar novo produto.
export function criarProduto(id: string, nome: string, preco: number) {
    const novoProduto: Produto = {
        id: id,
        nome: nome,
        preco: preco
    }
    produtos.push(novoProduto)
}