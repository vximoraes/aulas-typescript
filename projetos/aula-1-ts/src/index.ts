let idade: number = 20;
let nome: string = "Vini";
let pagamentoEfetuado: boolean = false;

idade = 18;
nome = "Vinícius Almeida Moraes";
pagamentoEfetuado = true;

//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);

//Enum

enum CoresPrimarias {
    vermelho = "#FF0000", 
    verde    = "#00FF00", 
    azul     = "#0000FF"
}

let corEscolhida: CoresPrimarias = CoresPrimarias.vermelho;
console.log(`Cor escolhida: ${corEscolhida}`)