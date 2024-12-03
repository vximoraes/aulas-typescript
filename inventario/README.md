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