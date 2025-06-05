/*EXERCÍCIO 5
Crie um enum chamado Prioridade com os valores
Baixa, Média, e Alta. Em seguida, escreva uma função
que recebe uma prioridade e retorna uma descrição
correspondente:
Baixa: "Essa tarefa pode ser feita depois."
Média: "Essa tarefa deve ser feita em breve."
Alta: "Essa tarefa é urgente!"*/

enum Prioridade {
    Baixa = "Baixa",
    Media = "Média", 
    Alta  = "Alta"
}

function descricaoDaPrioridade (prioridade: Prioridade) {
    switch(prioridade) {
        case Prioridade.Baixa:
            console.log(`${prioridade}: "Essa tarefa pode ser feita depois."`);
            break;
        case Prioridade.Media:
            console.log(`${prioridade}: "Essa tarefa deve ser feita em breve."`);
            break;
        case Prioridade.Alta:
            console.log(`${prioridade}: "Essa tarefa é urgente!"`);
            break;
        default:
            console.log("Valor não existente...")
    }   
}

descricaoDaPrioridade(Prioridade.Alta);