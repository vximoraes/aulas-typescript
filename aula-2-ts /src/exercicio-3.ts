/*EXERCÍCIO 3
Crie uma função chamada verificarAcesso que aceita
um parâmetro ehAdmin, que deve ser do tipo boolean.
A função deve retornar uma mensagem indicando se o
usuário tem acesso ao sistema ou não. Use template
strings para formatar a mensagem.
Se ehAdmin for true, a função deve retornar: "Acesso
concedido. Bem-vindo ao sistema administrativo."
Se ehAdmin for false, a função deve retornar:
"Acesso negado. Você não tem permissão para
acessar o sistema."*/

function verificarAcesso(ehAdmin: boolean) {
    if (ehAdmin) {
        console.log("Acesso concedido. Bem-vindo ao sistema administrativo!")
    } else {
        console.log("Acesso negado. Você não tem permissão para acessar o sistema!")
    }
}

verificarAcesso(true);