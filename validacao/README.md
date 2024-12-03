## 2) Validação de Dados de Usuário

Crie um validador de dados para cadastro de usuários em TypeScript.

1.Crie uma interface Usuario com os seguintes campos:
- username (string): deve ter pelo menos 5 caracteres.
- email (string): deve ser um endereço de e-mail válido.
- password (string): deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.
- idade (número): deve ser maior ou igual a 18.

2.Implemente uma função validarUsuario(usuario: Usuario): string[] que:
- Recebe um objeto do tipo Usuario.
- Retorna um array de strings com mensagens de erro, caso as validações falhem.
- Retorna um array vazio se todos os dados forem válidos.

3.Teste a função com pelo menos 3 usuários:
- Um usuário com todos os dados válidos.
- Um usuário com pelo menos dois campos inválidos.
- Um usuário com um único campo inválido.