import fs from "fs"
import { Estudante } from "./Estudante"
import { formatarEstudante } from "./formatarEstudante"
import { filePath } from "../../config/filePath"
import { arrayEstudantes } from "./estudantes"

export function salvarEstudante(estudantes: Estudante[]): void {
    arrayEstudantes.push()
    try {
        const dadosFormatados = formatarEstudante(estudantes)
        fs.writeFileSync(filePath, dadosFormatados)
    } catch (err) {
        console.log(`Erro ao gravar arquivo: ${(err as Error).message}`)
    }
}