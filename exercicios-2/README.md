# Exercícios para o dia 27/11/2024

## 1) Implementação de um Sistema de Inventário

Crie uma aplicação em TypeScript para gerenciar o inventário de produtos de uma loja. Siga os requisitos abaixo:

1.Crie uma interface Produto com os seguintes campos:

- id (UUID): um identificador único para o produto.
- nome (string): o nome do produto.
- preco (número): o preço do produto.
- quantidade (número): a quantidade disponível no estoque.

2.Crie funções que implementem as seguintes funcionalidades:
- Um método addProduto(produto: Produto): void para adicionar um produto ao inventário.
- Um método removerProduto(id: number): void para remover um produto pelo ID.
- Um método atualizarQuantidade(id: number, quantidade: number): void para atualizar a quantidade de um produto no estoque.
- Um método getValorTotal(): number para calcular o valor total dos produtos no inventário.

3.Teste as funcionalidades:
- Adicione 3 produtos ao inventário.
- Atualize a quantidade de um dos produtos.
- Remova um produto.
- Imprima o valor total do inventário.

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

## 3) Manipulação de dados com Map e Filter
Você vai manipular uma lista de produtos para aplicar descontos e filtrar os resultados no 1º exercício.

1.Crie uma função aplicarDisconto(produtos: Product[], desconto: number): Product[] que:
- Recebe um array de produtos e um valor de desconto (em porcentagem, ex.: 10 para 10%).
- Retorna um novo array com os preços dos produtos atualizados após o desconto.

2.Crie uma função filtrarPorCategoria(produtos: Produto[], categoria: string): Produto[] que:
- Recebe um array de produtos e uma categoria.
- Retorna apenas os produtos que pertencem à categoria especificada.

3.Teste o código com uma lista de pelo menos 5 produtos:
- Aplique um desconto de 15% em todos os produtos.
- Filtre apenas os produtos da categoria "eletrônicos".

## 4) Conversor de Moedas

Implemente uma função para converter valores entre diferentes moedas usando um enum.

1.Crie um enum Currency com os valores:
- USD (Dólar Americano).
- EUR (Euro).
- BRL (Real Brasileiro).

2.Crie um objeto exchangeRates que mapeia as taxas de câmbio (em relação ao Real). Exemplo:

bash ```
const exchangeRates = {
  USD: 5.25,
  EUR: 5.9,
  BRL: 1
};
```

3.Implemente uma função convertCurrency(amount: number, from: Currency, to: Currency): number que:

- Recebe um valor (em amount), a moeda de origem (from) e a moeda de destino (to).
- Retorna o valor convertido, baseado nas taxas de câmbio fornecidas.

4.Teste a função:
- Converta R$100 para dólares.
- Converta €50 para reais.
- Converta $200 para euros.
