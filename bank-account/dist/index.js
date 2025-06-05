"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
let pessoa = {
    nome: 'Vinícius',
    tipoConta: 'Corrente',
    saldo: 2500
};
function exibirMenu() {
    console.clear();
    console.log('---------------------------------------');
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Tipo da Conta: ${pessoa.tipoConta}`);
    console.log(`Saldo: ${pessoa.saldo}`);
    console.log('---------------------------------------');
    console.log('\nOperações: \n');
    console.log('1 - Checar Saldo');
    console.log('2 - Receber Valor');
    console.log('3 - Transferir Valor');
    console.log('4 - Sair');
    return prompt('\nSua opção: ');
}
exibirMenu();
