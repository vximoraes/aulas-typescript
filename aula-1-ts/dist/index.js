"use strict";
let idade = 20;
let nome = "Vini";
let pagamentoEfetuado = false;
idade = 18;
nome = "Vinícius Almeida Moraes";
pagamentoEfetuado = true;
//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);
//Enum
var Direcao;
(function (Direcao) {
    Direcao["Norte"] = "NORTE";
    Direcao["Sul"] = "SUL";
    Direcao["Leste"] = "LESTE";
    Direcao["Oeste"] = "OESTE";
})(Direcao || (Direcao = {}));
let direcaoTomada = Direcao.Sul;
console.log(`Direção tomada: ${direcaoTomada}`);
var CoresPrimarias;
(function (CoresPrimarias) {
    CoresPrimarias["Vermelho"] = "#FF0000";
    CoresPrimarias["Verde"] = "#00FF00";
    CoresPrimarias["Azul"] = "#0000FF";
})(CoresPrimarias || (CoresPrimarias = {}));
let corEscolhida = CoresPrimarias.Vermelho;
console.log(`Cor escolhida: ${corEscolhida}`);
