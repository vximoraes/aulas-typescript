# Exercícios para os dias 25/11/2024
## 1) Gerenciamento de Usuários
Crie uma aplicação que gerencie usuários e seus papéis (roles).
    1.Crie um enum Role com os valores: ADMIN, USER, GUEST.
    2.Defina uma interface User com os campos: id, nome, role.
    3.Utilize UUID para gerar o id.
    4.Crie uma função que receba um array de usuários e filtre apenas os usuários com um determinado papel.
Obs.: utilize arquivos separados para implementar o exercícios.

## 2) Gerenciamento de Produtos
Crie uma lista de produtos e exiba-os formatados.
    1.Defina uma interface Produto com os campos id, nome e preço.
    2.Crie um array de produtos.
    3.Use o método forEach para exibir cada produto no formato: "Produto: Nome (R$ Preço)".
Obs.: utilize o pacote npm chalk para formatar a saída no console.

## 3) Gerenciamento de Eventos
Crie um sistema que exiba informações sobre eventos.
    1.Defina uma interface Event com os campos: id, name, date (string).
    2.Crie funções para gerenciar eventos (adicionar, listar, listar um específico e deletar).
    3.Crie uma função que receba um array de eventos e exiba os eventos futuros (data maior que a atual).
