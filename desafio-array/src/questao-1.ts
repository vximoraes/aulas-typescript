interface Pessoa {
    nome: string
    idade: number
}

let pessoasCadastradas: Pessoa[] = [
    { nome: 'Vinícius', idade: 17 },
    { nome: 'Yuri'    , idade: 19 },
    { nome: 'Eduardo' , idade: 70 },
    { nome: 'Arthur'  , idade: 19 }
]

// -------------------------------------------------------------------

console.log('\n\n | MAIORES DE IDADE | \n')

let maioresDeIdade: Pessoa[] = pessoasCadastradas.filter(pessoa => pessoa.idade >= 18)

maioresDeIdade.forEach(pessoa => console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\n`))

// -------------------------------------------------------------------

console.log('\n\n | IDOSOS | \n')

let idosos: Pessoa[] = pessoasCadastradas.filter(pessoa => pessoa.idade > 60)

idosos.forEach(idoso => console.log(`Nome: ${idoso.nome}\nIdade: ${idoso.idade}\n`))

