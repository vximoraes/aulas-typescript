/*EXERCÍCIO 2
Crie uma função chamada calcularIdade que aceita
um parâmetro anoNascimento do tipo number e
retorna uma string com a idade da pessoa. Use
template strings para formatar a saída.*/

function calcularIdade (anoNascimento: number) {
    let idade: number = 2024 - anoNascimento;
    console.log(`Você tem ${idade} anos de idade!`)
}

calcularIdade(2005);
