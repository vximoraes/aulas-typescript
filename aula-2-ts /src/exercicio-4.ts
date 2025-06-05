/*EXERCÍCIO 4
Você deve criar um enum chamado Nota que
represente as notas de um aluno. As notas podem ser:
A, B, C, D, e F. Em seguida, escreva uma função que
recebe uma nota e retorna uma mensagem com base
na seguinte lógica:
A: "Excelente"
B: "Bom"
C: "Satisfatório"
D: "Insatisfatório"
F: "Reprovado"*/

enum Nota {
    A = "Excelente",
    B = "Bom",
    C = "Satisfatório",
    D = "Insatisfatório",
    F = "Reprovado"
}

function descricaoDaNota(nota: Nota) {
    console.log(`Descrição da nota escolhida: '${nota}'`);
}
descricaoDaNota(Nota.A);