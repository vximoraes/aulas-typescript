import { Categorias } from './../types/Categorias';

// Interface Produto.
export interface Produto {
    id: string
    nome: string
    preco: number
    quantidade: number
    categoria: Categorias
}