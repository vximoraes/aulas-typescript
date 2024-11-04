let hoje: Date = new Date()
console.log(hoje)

console.log(hoje.toString())
console.log(hoje.toUTCString()) 

console.log(`Hoje: ${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`)

let dataNascimento: Date = new Date("2005-06-23")
console.log(dataNascimento)

let dataAtualizacaoDoSoftware: Date = new Date("2021-06-23T10:30:00")
console.log(dataAtualizacaoDoSoftware.toString())