// ----------------------------------------------------------------

let nomes: string[] = ['Vinícius', 'Yuri', 'Eduardo', 'Arthur']
let nomes2: string[] = ['Vinícius', 'Yuri', 'Eduardo', 'Arthur']

nomes.forEach(function (nome) {
    console.log(nome)
})

// Arrow Function
nomes2.forEach(nome => console.log(nome))

// ----------------------------------------------------------------

interface Produto {
    descricao: string,
    preco    : number
}

let meusProdutos: Produto[] = [
    { descricao: 'Produto1', preco: 1 },
    { descricao: 'Produto2', preco: 2 },
    { descricao: 'Produto3', preco: 3 }
]

console.log(meusProdutos.length)
console.log(meusProdutos)

//meusProdutos.forEach(produto => console.log(produto.descricao))

// ----------------------------------------------------------------

let produtosSelecionados: Produto[] = meusProdutos.filter(produto => produto.preco >= 2)
console.log(produtosSelecionados)