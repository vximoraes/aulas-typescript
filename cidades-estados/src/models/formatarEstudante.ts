import { Estudante } from "./Estudante"

export function formatarEstudante(estudantes: Estudante[]): string {
    return estudantes.map(estudante => {
        return `${estudante.id};${estudante.nome};${estudante.email};${estudante.cidade.nome};${estudante.cidade.estado}`
    }).join('\n')
}