import * as promptSync from 'prompt-sync';
const prompt = require('prompt-sync')();

interface Pessoa {
    nome: string,
    tipoConta: string,
    saldo: number,
}

let pessoa: Pessoa = {
    nome: 'Vinícius',
    tipoConta: 'Corrente',
    saldo: 2500
}
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

    var opcao = prompt('\nSua opção: ');
}

exibirMenu();


