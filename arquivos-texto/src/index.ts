import fs from 'fs'

const filePath: string = './data/estudantes.txt' 

let conteudo = ''

try {
    conteudo = fs.readFileSync(filePath, 'utf-8')
} catch(err) {
    console.log(`${(err as Error).message}`)
}

let linhas: string[] = []

if (conteudo) {
    linhas = conteudo.split('\n')
    // linhas.push('Micaelly')
    linhas.forEach((linha, key) => console.log(`${key} - ${linha}`))
}

try {
    fs.writeFileSync(filePath, linhas.join('\n'))
} catch(err) {
    console.log(`${(err as Error).message}`)
}