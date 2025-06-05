/*EXERCÍCIO 1
Crie uma função chamada calcularArea que aceita dois
parâmetros: largura e altura. Ambos os parâmetros
devem ser do tipo number. A função deve retornar a
área do retângulo como um número.*/

function calcularArea(largura: number, altura: number) {
    let areaDoRetangulo: number = largura * altura;
    return areaDoRetangulo;
}

console.log(calcularArea(15, 10));