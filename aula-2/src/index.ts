let nomes: string[] = ['Vinícius', 'Yuri', 'Eduardo', 'Arthur']
let nomes2: string[] = ['Vinícius', 'Yuri', 'Eduardo', 'Arthur']

nomes.forEach(function (nome) {
    console.log(nome)
})

console.log('--------')

// Arrow Function
nomes2.forEach(nome => console.log(nome))