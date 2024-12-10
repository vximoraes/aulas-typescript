import fs from "fs"
import { filePath } from "../../config/filePath"

export function exibirEstudantes(): void {
    let conteudo: string = ''
    
    try {
        conteudo = fs.readFileSync(filePath, 'utf-8')
    } catch (err) {
        console.log(`Erro na leitura do arquivo: ${(err as Error).message}`)
        return
    }

    if (conteudo) {
        const estudantes = conteudo.split('\n')
        estudantes.forEach((linha, key) => {
            const campos = linha.split(';')
            console.log(`${key} - ID: ${campos[0]}, Nome: ${campos[1]}, Email: ${campos[2]}, Cidade: ${campos[3]}, Estado: ${campos[4]}`)
        });
    }
}