import { Cidade } from "./Cidade"

export interface Estudante {
    id: string
    nome: string
    email: string
    cidade: Cidade
}