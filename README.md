# 🔷 O que é TypeScript?

**TypeScript** é um *superset* do JavaScript, desenvolvido pela Microsoft, que adiciona tipagem estática opcional ao JavaScript. Ele se comporta como uma linguagem de programação independente que, no final, é compilada para JavaScript puro, para ser executado em navegadores ou em ambientes como Node.js.

- **Superset**: Significa que o TypeScript contém todas as funcionalidades do JavaScript e, além disso, adiciona novos recursos como tipagem estática, interfaces, e classes mais avançadas.
- **Compilação para JavaScript**: O código TypeScript precisa ser compilado para JavaScript antes de ser executado. Isso acontece porque navegadores e runtimes não entendem TypeScript diretamente.

### Exemplo de sintaxe:
JavaScript
```javascript
let nome = "Vinícius";
```

TypeScript
```typescript
let nome: string = "Vinícius";
```

# 🛠️ Para que serve?

O TypeScript foi criado para melhorar a experiência de desenvolvimento com JavaScript, principalmente em projetos grandes e complexos. Ele é amplamente utilizado para fornecer mais ferramentas para gerenciar a complexidade do código e evitar erros comuns.

### Principais Usos:
- **Desenvolvimento de Aplicações em Larga Escala**: TypeScript é muito útil para aplicações maiores, onde a tipagem estática ajuda a prever erros durante a fase de desenvolvimento e a manter o código mais gerenciável.
  
- **Melhorar a Manutenção**: A tipagem e as funcionalidades avançadas do TypeScript, como classes e interfaces, ajudam a estruturar o código de maneira mais clara e organizada.

- **Desenvolvimento Frontend e Backend**: TypeScript é amplamente utilizado tanto no frontend (ex.: Angular, React, Vue.js) quanto no backend (ex.: Node.js).

- **Suporte a Ferramentas de IDE**: TypeScript permite uma melhor integração com editores de código, oferecendo autocompletar, verificação de erros em tempo real, navegação mais rápida no código, entre outros benefícios.


# ✨ Vantagens do TypeScript

### 1. **Tipagem Estática**
- **Tipagem explícita**: Com TypeScript, você pode declarar o tipo de cada variável, função, ou objeto, o que ajuda a identificar erros de forma antecipada, antes da execução do código.

```typescript
let idade: number = 25;
```

### 2. **Melhor Verificação de Erros**
- Ao contrário do JavaScript, onde muitos erros são detectados apenas durante a execução, o TypeScript permite capturar erros de tipagem e inconsistências no código durante a fase de compilação, tornando o desenvolvimento mais seguro.

### 3. **Autocompletar e Suporte a IDEs**
- TypeScript fornece melhor autocompletar e suporte em editores como Visual Studio Code. Como ele sabe o tipo dos objetos, consegue sugerir propriedades e métodos, além de ajudar a evitar erros de digitação.

### 4. **Interfaces e Classes**
- TypeScript tem um sistema robusto de orientação a objetos com suporte a classes, interfaces, herança, modificadores de visibilidade (`public`, `private`, `protected`) e muito mais. Isso facilita a criação de código mais estruturado e modular.

```typescript
interface Pessoa {
  nome: string;
  idade: number;
}

let pessoa: Pessoa = {
nome: "João",
idade: 25
};
```

### 5. **Compatível com JavaScript**
- Como TypeScript é um superset de JavaScript, todo código JavaScript é código TypeScript válido. Isso significa que você pode começar um projeto existente em JavaScript e migrar gradualmente para TypeScript.

### 6. **Código Mais Legível e Melhor Manutenção**
- O uso de tipos e as ferramentas que TypeScript oferece (como classes, interfaces, enums, generics, entre outros) melhoram a legibilidade e a clareza do código, facilitando a manutenção e o entendimento do código por outros desenvolvedores.

# ⚠️ Desvantagens do TypeScript

### 1. **Curva de Aprendizado**
- Embora o TypeScript seja uma evolução do JavaScript, ele adiciona complexidade com o uso de tipagem estática e outras características. Para desenvolvedores que só conhecem JavaScript, pode haver uma curva de aprendizado.

### 2. **Configuração Adicional**
- TypeScript exige um processo de compilação para transformar o código TypeScript em JavaScript, o que requer configuração inicial (ex.: `tsconfig.json`) e ferramentas extras para gerenciar essa compilação.

### 3. **Tempo de Compilação**
- Por ser uma linguagem compilada, o TypeScript pode adicionar um tempo extra no ciclo de desenvolvimento, já que o código precisa ser convertido em JavaScript.

### 4. **Comunidade e Ecossistema**
- Algumas bibliotecas JavaScript podem não ter suporte completo ou definições de tipos (`@types`), o que pode forçar você a criar seus próprios tipos.

### 5. **Dependência da Qualidade da Tipagem**
- A qualidade da tipagem no TypeScript depende das definições de tipos usadas. Se as definições de tipos forem mal escritas, isso pode gerar problemas e aumentar o trabalho.

# 🎯 Conclusão

O **TypeScript** é uma poderosa ferramenta para desenvolvedores JavaScript que desejam escrever código mais robusto, seguro e escalável. Ele oferece tipagem estática, ferramentas de orientação a objetos e melhor suporte de IDE, o que resulta em código de maior qualidade e menos propenso a erros.

### **Quando Usar TypeScript?**
- **Projetos grandes e complexos**: Quando a base de código cresce, o TypeScript facilita a gestão de código e melhora a colaboração em equipe.
- **Trabalho em equipe**: A tipagem ajuda outros desenvolvedores a entenderem melhor os contratos e regras do código, sem precisar ler todo o código-fonte.
- **Manutenção de código**: Se o seu projeto precisar de manutenção contínua, a segurança que o TypeScript proporciona pode economizar tempo e evitar bugs.

### **Quando Não Usar?**
- **Projetos pequenos ou rápidos**: Para scripts simples ou protótipos, o overhead do TypeScript pode ser desnecessário.
- **Equipes pequenas e sem conhecimento prévio**: Se sua equipe não tem familiaridade com TypeScript e o projeto não exige um controle rígido sobre os tipos, talvez JavaScript puro seja suficiente.

---

# 📝 Tipos de Dados

## 🔡 String

O tipo **string** é usado para representar textos. Pode ser declarado usando aspas simples (`'`), aspas duplas (`"`) ou template literals (`` ` ``).

### Exemplo:
```typescript
let nome: string = "Vinícius";
let saudacao: string = `Olá, ${nome}!`;
```

## 🔢 Number

O tipo **number** é usado para representar valores numéricos, incluindo números inteiros e decimais.

### Exemplo:
```typescript
let idade: number = 25;
let altura: number = 1.75;
```

## 🔘 Boolean

O tipo **boolean** pode assumir apenas dois valores: **true** ou **false**. É usado para representar condições lógicas.

### Exemplo:
```typescript
let isDeveloper: boolean = true;
let hasLicense: boolean = false;
```

## ✨ Benefícios de Tipagem Explícita

- **Segurança**: Declarar o tipo de uma variável ajuda a prevenir erros de atribuição de valores inadequados.
- **Facilidade na Detecção de Erros**: O TypeScript avisa quando tentamos atribuir um valor do tipo errado a uma variável.
```typescript
let numero: number = 42;
numero = "quarenta e dois"; // Error: Type 'string' is not assignable to type 'number'
```

- **Autocompletar**: Editores de código como VSCode oferecem melhores sugestões e completam o código automaticamente, facilitando o desenvolvimento.

---

# 🔀 Ternários

## 🔍 O que é um Operador Ternário?

O **operador ternário** é uma forma curta de escrever uma expressão condicional em JavaScript e TypeScript. Ele permite executar uma condição de maneira mais concisa, substituindo o tradicional bloco `if-else`.

A sintaxe é composta de três partes, por isso o nome "ternário":
```typescript
condição ? expressão1 : expressão2;
```
Se a condição for verdadeira, o valor de expressão1 será retornado; caso contrário, expressão2 será retornado.

## 🛠️ Como Funciona

- **Condição:** A expressão booleana a ser avaliada.
- **Expressão1:** Executada se a condição for verdadeira (true).
- **Expressão2:** Executada se a condição for falsa (false).

É uma maneira compacta de escrever o if-else tradicional, onde você precisa escolher entre duas opções.

## ✨ Exemplo de Uso

### Exemplo 1: Comparação simples
Aqui está um exemplo em TypeScript, onde o operador ternário decide se uma pessoa é adulta ou não:

```typescript
let idade: number = 18;
let status: string = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Adulto
```

### Exemplo 2: Verificação em tempo real
Usando o operador ternário para exibir mensagens de status dinâmicas:

``` typescript
let online: boolean = true;
let mensagem: string = online ? "Usuário está online" : "Usuário está offline";
console.log(mensagem); // Usuário está online
```

## ⚡ Vantagens do Operador Ternário

Sintaxe mais curta: Substitui múltiplas linhas de if-else por uma única linha.

### Exemplo:
```typescript
// Usando if-else
if (idade >= 18) {
  status = "Adulto";
} else {
  status = "Menor de idade";
}

// Usando ternário
status = (idade >= 18) ? "Adulto" : "Menor de idade";
```

Código mais legível: Para verificações simples, o ternário pode tornar o código mais limpo e fácil de ler, especialmente em comparações simples.

## ⚠️ Cuidados ao Usar

### 1. **Excessos** 
O uso excessivo de operadores ternários pode comprometer a legibilidade do código, especialmente em expressões complexas. Se a lógica se tornar muito complicada, é melhor usar if-else para manter a clareza.

### 2. **Aninhamento** 
Evite o aninhamento de múltiplos operadores ternários, pois isso pode tornar o código confuso e difícil de manter.

- Exemplo a ser evitado:
```typescript
let resultado = condição1 ? valor1 : condição2 ? valor2 : valor3;
```

---

# 🏷️ Objetos

## 🔍 O que é um Objeto?

Um **objeto** em JavaScript e TypeScript é uma coleção de propriedades e valores. Cada propriedade é composta por uma chave (nome) e um valor associado. Objetos permitem agrupar dados de forma estruturada e são fundamentais para a programação orientada a objetos.

A sintaxe básica para criar um objeto é:

```typescript
let pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor"
};
```
Neste exemplo, `pessoa` é um objeto com três propriedades: `nome`, `idade` e `profissao`.

## 🛠️ Como Funciona

Um objeto é definido dentro de chaves `{}` e contém pares chave-valor. As chaves são sempre strings, e os valores podem ser de qualquer tipo de dado, como números, strings, arrays, ou até outros objetos.

Exemplo:

```typescript
let carro = {
  modelo: "Fusca",
  cor: "azul",
  ano: 1979,
  dono: {
    nome: "Maria",
    idade: 34
  }
};
```
Aqui, o objeto `carro` tem propriedades de diferentes tipos, incluindo o valor `dono`, que é outro objeto.

## ✨ Exemplo de Uso

### Acessando Propriedades

As propriedades de um objeto podem ser acessadas de duas maneiras:

1. **Notação de ponto:**
```typescript
let nome = pessoa.nome; // João
console.log(nome);
```
2. **Notação de colchetes:**
```typescript
let idade = pessoa["idade"]; // 25
console.log(idade);
```

### Modificando Propriedades

As propriedades também podem ser modificadas:
```typescript
pessoa.idade = 26;
console.log(pessoa.idade); // 26
```

Ou adicionar novas propriedades:
```typescript
pessoa.email = "joao@example.com";
console.log(pessoa.email); // joao@example.com
```

### Métodos em Objetos
Objetos também podem conter métodos (funções associadas a objetos):

```typescript
let pessoa = {
  nome: "João",
  idade: 25,
  saudacao: function() {
    return `Olá, meu nome é ${this.nome}`;
  }
};

console.log(pessoa.saudacao()); // Olá, meu nome é João
```

## ⚡ Vantagens dos Objetos

1. **Estruturação de dados:** Objetos permitem agrupar dados relacionados em um único local, facilitando o acesso e a manipulação.
2. **Flexibilidade:** Podem armazenar diversos tipos de valores, incluindo funções (métodos), o que os torna extremamente úteis para modelar entidades e comportamentos.
3. **Expansibilidade:** Podemos adicionar novas propriedades e métodos aos objetos dinamicamente durante a execução do programa.

## ⚠️ Cuidados ao Usar

1. **Modificação de Propriedades:** Modificar diretamente as propriedades de um objeto pode ser perigoso, especialmente se não for bem controlado. É recomendável usar boas práticas como a criação de métodos para controlar alterações em dados importantes.
2. **Imutabilidade:** Objetos podem ser mutáveis, ou seja, seus valores podem ser alterados diretamente. Isso pode gerar efeitos colaterais indesejados em programas grandes. Considerar o uso de objetos imutáveis pode ajudar a evitar esses problemas.

## 💻 Exemplos
### Criando um Objeto Simples
```typescript
let livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1954
};
```

### Objeto com Métodos
```typescript
let carro = {
  modelo: "Fusca",
  cor: "azul",
  acelerar: function() {
    console.log("O carro está acelerando!");
  }
};

carro.acelerar(); // O carro está acelerando!
```

---

# 🔑 Enums

## 🔍 O que é um Enum?

Em JavaScript e TypeScript, um **enum** (abreviação de "enumeração") é um tipo especial de objeto que permite definir um conjunto de valores nomeados. É usado para representar um conjunto fixo de constantes, proporcionando uma maneira de tornar o código mais legível e fácil de manter.

No TypeScript, os enums ajudam a associar valores simbólicos a números ou strings. Eles são especialmente úteis quando se trabalha com estados ou categorias, como dias da semana, status de pedidos, etc.

## 🛠️ Como Funciona

Existem dois tipos principais de enums em TypeScript:

1. **Enum numérico**: onde os valores são números.
2. **Enum de string**: onde os valores são strings.

### Enum numérico

Por padrão, o primeiro valor de um enum numérico começa com 0, e cada valor subsequente é incrementado em 1, mas você pode definir explicitamente o valor de qualquer item.

Exemplo:
```typescript
enum Cor {
  Vermelho = 1,
  Verde,
  Azul
}

let minhaCor: Cor = Cor.Vermelho;
console.log(minhaCor); // 1
```
Neste exemplo, Cor.Vermelho tem o valor 1, Cor.Verde tem o valor 2 e Cor.Azul tem o valor 3.

### Enum de string

Enums de string atribuem valores de string a cada item, tornando o código mais legível.

Exemplo:
```typescript
enum Status {
  Pendente = "Pendente",
  Concluido = "Concluído",
  Cancelado = "Cancelado"
}

let meuStatus: Status = Status.Concluido;
console.log(meuStatus); // "Concluído"
```
Aqui, cada valor do enum é uma string, como "Pendente", "Concluído", ou "Cancelado".

## ✨ Exemplo de Uso

### Acessando Enum

Você pode acessar os valores de um enum diretamente pelo nome da constante ou utilizando o valor correspondente.

Exemplo:
```typescript
enum Direcao {
  Cima = "CIMA",
  Baixo = "BAIXO",
  Esquerda = "ESQUERDA",
  Direita = "DIREITA"
}

let movimento: Direcao = Direcao.Cima;
console.log(movimento); // "CIMA"
```
Neste exemplo, o valor de movimento será "CIMA".

### Iterando Sobre um Enum

Você pode iterar sobre os valores de um enum utilizando um loop. Para enums numéricos, isso pode ser feito da seguinte forma:
```typescript
enum Nivel {
  Baixo = 1,
  Medio,
  Alto
}

for (let nivel in Nivel) {
  console.log(`${nivel}: ${Nivel[nivel]}`);
}
```

Para enums de string, você pode iterar sobre os valores diretamente:
```typescript
enum Status {
  Ativo = "Ativo",
  Inativo = "Inativo"
}

for (let status in Status) {
  console.log(`${status}: ${Status[status]}`);
}
```

## ⚡ Vantagens dos Enums

1. **Legibilidade:** Usar enums torna o código mais fácil de entender, pois substitui números mágicos ou strings arbitrárias por valores nomeados.
2. **Manutenibilidade:** Enums centralizam os valores possíveis para uma variável, facilitando alterações no futuro, já que você não precisa buscar e substituir valores espalhados pelo código.
3. **Segurança de Tipo:** Enums ajudam a evitar erros ao garantir que apenas valores válidos sejam atribuídos, especialmente quando usados com tipos específicos.

## ⚠️ Cuidados ao Usar

1. **Tamanho do Código:** Enums podem aumentar o tamanho do código, especialmente quando usados em excesso, uma vez que eles são traduzidos para objetos no JavaScript.
2. **Limitações em JavaScript:** Enums não existem nativamente no JavaScript, então eles são uma feature do TypeScript. Ao compilar para JavaScript, o enum se transforma em um objeto, o que pode gerar algum comportamento inesperado em alguns casos.
3. **Confusão com Objetos:** Embora enums sejam parecidos com objetos, eles têm um propósito semântico diferente e podem se comportar de maneira diferente, o que pode causar confusão.

## 💻 Exemplos

### Enum Simples
```typescript
enum DiaDaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda",
  Terça = "Terça",
  Quarta = "Quarta",
  Quinta = "Quinta",
  Sexta = "Sexta",
  Sabado = "Sábado"
}
```

### Enum com Valor Numérico
```typescript
enum NivelDeAcesso {
  Admin = 1,
  Editor,
  Viewer
}
```

### Enum com Função
```typescript
enum FormaGeometrica {
  Circulo = "Círculo",
  Quadrado = "Quadrado",
  Triangulo = "Triângulo"
}

function calcularArea(forma: FormaGeometrica): number {
  switch (forma) {
    case FormaGeometrica.Circulo:
      return Math.PI * 5 * 5; // Exemplo de área de um círculo
    case FormaGeometrica.Quadrado:
      return 10 * 10; // Exemplo de área de um quadrado
    case FormaGeometrica.Triangulo:
      return (10 * 10) / 2; // Exemplo de área de um triângulo
    default:
      return 0;
  }
}

console.log(calcularArea(FormaGeometrica.Circulo)); // Área do círculo
```

---

# 📝 Interfaces

## 🔍 O que é uma Interface?

Em TypeScript, uma **interface** é uma maneira de definir a estrutura de um objeto. Ela descreve a forma de um objeto, incluindo os tipos e os nomes das propriedades. Interfaces ajudam a garantir que um objeto siga um determinado padrão, aumentando a segurança e a legibilidade do código.

Interfaces podem ser usadas para definir contratos dentro do código, especificando as propriedades e métodos que uma classe ou objeto deve implementar, sem fornecer a implementação real.

## 🛠️ Como Funciona

Uma interface em TypeScript define apenas a **assinatura** de um objeto, mas não sua implementação. Ela pode ser usada para definir tipos de objetos, garantir que classes implementem métodos específicos, e até mesmo como parâmetros de funções.

### Definindo uma Interface

A sintaxe básica para definir uma interface é:

```typescript
interface NomeDaInterface {
  propriedade1: tipo;
  propriedade2: tipo;
  metodo1(): tipoRetorno;
}
```

Exemplo:

```typescript
interface Pessoa {
  nome: string;
  idade: number;
  saudacao(): void;
}
```

Neste exemplo, a interface `Pessoa` define que qualquer objeto ou classe que implemente essa interface deve ter:
- Uma propriedade `nome` do tipo `string`.
- Uma propriedade `idade` do tipo `number`.
- Um método `saudacao` que não retorna nada (`void`).

### Implementando uma Interface em uma Classe

Uma classe pode implementar uma interface, o que significa que ela deve fornecer implementações para os métodos e propriedades definidos na interface.

Exemplo:

```typescript
class Aluno implements Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}
```

Aqui, a classe `Aluno` implementa a interface `Pessoa` e, portanto, deve definir as propriedades `nome` e `idade`, além do método `saudacao`.

### Usando uma Interface com Funções

Interfaces também podem ser usadas para descrever o tipo de uma função, incluindo os tipos de seus parâmetros e o valor de retorno.

Exemplo:

```typescript
interface Calculadora {
  soma(a: number, b: number): number;
  subtrai(a: number, b: number): number;
}

class CalculadoraSimples implements Calculadora {
  soma(a: number, b: number): number {
    return a + b;
  }

  subtrai(a: number, b: number): number {
    return a - b;
  }
}

let calc = new CalculadoraSimples();
console.log(calc.soma(5, 3));  // 8
console.log(calc.subtrai(5, 3));  // 2
```

### Interfaces com Propriedades Opcionais

Você pode tornar propriedades em uma interface opcionais, usando o operador `?`.

Exemplo:

```typescript
interface Carro {
  marca: string;
  modelo: string;
  cor?: string; // Propriedade opcional
}

let carro1: Carro = { marca: "Toyota", modelo: "Corolla" };
let carro2: Carro = { marca: "Honda", modelo: "Civic", cor: "preto" };
```

Neste exemplo, a propriedade `cor` é opcional, ou seja, não é necessário incluir essa propriedade ao criar um objeto do tipo `Carro`.

## ✨ Exemplo de Uso

### Definindo e Usando Interfaces

```typescript
interface Produto {
  nome: string;
  preco: number;
}

function exibirProduto(produto: Produto): void {
  console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`);
}

const produto: Produto = { nome: "Camiseta", preco: 39.99 };
exibirProduto(produto);
```

### Extending (Herança) de Interfaces

Interfaces podem ser estendidas, o que significa que você pode criar uma interface que herda propriedades de outra.

Exemplo:

```typescript
interface Funcionario {
  nome: string;
  salario: number;
}

interface Gerente extends Funcionario {
  equipe: string[];
}

const gerente: Gerente = {
  nome: "Carlos",
  salario: 5000,
  equipe: ["Ana", "Roberto", "Marcelo"]
};

console.log(gerente);
```

Neste exemplo, a interface `Gerente` estende `Funcionario`, o que significa que ela herda as propriedades `nome` e `salario`, além de adicionar a propriedade `equipe`.

### Funções e Interfaces com Tipos de Retorno

Interfaces podem ser usadas para definir funções com tipos de retorno específicos.

```typescript
interface Calculadora {
  calcular(valor1: number, valor2: number): number;
}

class Soma implements Calculadora {
  calcular(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }
}

const soma = new Soma();
console.log(soma.calcular(5, 3));  // 8
```

## ⚡ Vantagens das Interfaces

1. **Contratos Claros**: As interfaces ajudam a definir contratos claros para objetos e classes, garantindo que os mesmos sigam uma estrutura específica.
   
2. **Reusabilidade**: Com interfaces, você pode reutilizar definições de tipo e garantir que diferentes classes ou objetos sigam a mesma estrutura.

3. **Segurança de Tipo**: Interfaces aumentam a segurança de tipo, garantindo que objetos e classes tenham as propriedades e métodos esperados, prevenindo erros.

## ⚠️ Cuidados ao Usar

1. **Complexidade Excessiva**: Interfaces podem aumentar a complexidade do código, especialmente se utilizadas de maneira excessiva.

2. **Falta de Implementação**: Como interfaces não fornecem uma implementação concreta, pode ser mais difícil entender como os métodos são realmente executados sem verificar a classe que os implementa.

3. **Herança Complexa**: A herança de interfaces pode levar a uma hierarquia complexa, o que pode ser difícil de gerenciar em sistemas grandes.

## 💻 Exemplos

### Interface Simples

```typescript
interface Produto {
  nome: string;
  preco: number;
}

let produto: Produto = { nome: "Camiseta", preco: 39.99 };
```

### Interface com Função

```typescript
interface Saudacao {
  mensagem(nome: string): string;
}

const saudacao: Saudacao = {
  mensagem(nome: string) {
    return `Olá, ${nome}!`;
  }
};

console.log(saudacao.mensagem("Carlos"));
```

---

# 📅 Date

## 🔍 O que é o Tipo Date?

Em JavaScript e TypeScript, o tipo **Date** é utilizado para manipulação de datas e horários. Ele permite que você crie, leia e modifique instâncias de data e hora, facilitando o trabalho com dados temporais, como a data e hora atual, diferenças entre datas, ou a formatação de datas para exibição.

A classe `Date` é uma instância do objeto global que possui métodos que permitem a manipulação de datas e horários.

## 🛠️ Criando uma Instância de Date

Você pode criar um objeto `Date` de várias maneiras, dependendo de como deseja manipular a data:

### 1. **Data e Hora Atual**

Para criar um objeto `Date` com a data e hora atuais, basta instanciar o objeto sem parâmetros:

```typescript
const dataAtual = new Date();
console.log(dataAtual);  // Exibe a data e hora atuais
```

### 2. **Data Específica**

Você pode criar um objeto `Date` a partir de uma data específica, fornecendo uma string ou valores individuais de ano, mês, dia, hora, minuto, segundo e milissegundo:

```typescript
const dataEspecifica = new Date("2024-11-11T10:00:00");
console.log(dataEspecifica);  // Exibe 11 de Novembro de 2024 às 10:00
```

Ou, passando parâmetros numéricos:

```typescript
const dataNumerica = new Date(2024, 10, 11, 10, 0, 0);  // Ano, Mês (0-indexed), Dia, Hora, Minuto, Segundo
console.log(dataNumerica);  // Exibe 11 de Novembro de 2024 às 10:00
```

### 3. **Data com Timestamp (milissegundos desde 1970)**

Você também pode criar um `Date` a partir de um timestamp, que é o número de milissegundos que se passaram desde a meia-noite de 1º de janeiro de 1970 (Epoch Time):

```typescript
const dataComTimestamp = new Date(1672531199000);  // Timestamp em milissegundos
console.log(dataComTimestamp);  // Exibe a data correspondente ao timestamp
```

## ✨ Métodos Comuns de Date

Aqui estão alguns métodos úteis para manipulação de datas com a classe `Date`:

### 1. **getDate()** – Obter o Dia do Mês

```typescript
const data = new Date();
console.log(data.getDate());  // Exibe o dia do mês (1-31)
```

### 2. **getMonth()** – Obter o Mês (0-11)

Lembre-se que os meses começam a partir de 0 (Janeiro = 0, Fevereiro = 1, etc).

```typescript
console.log(data.getMonth());  // Exibe o mês atual (0-11)
```

### 3. **getFullYear()** – Obter o Ano

```typescript
console.log(data.getFullYear());  // Exibe o ano completo (ex: 2024)
```

### 4. **getHours()** – Obter as Horas

```typescript
console.log(data.getHours());  // Exibe as horas (0-23)
```

### 5. **getMinutes()** – Obter os Minutos

```typescript
console.log(data.getMinutes());  // Exibe os minutos (0-59)
```

### 6. **getSeconds()** – Obter os Segundos

```typescript
console.log(data.getSeconds());  // Exibe os segundos (0-59)
```

### 7. **getMilliseconds()** – Obter os Milissegundos

```typescript
console.log(data.getMilliseconds());  // Exibe os milissegundos (0-999)
```

### 8. **getDay()** – Obter o Dia da Semana (0-6)

Este método retorna o dia da semana (0 = Domingo, 1 = Segunda-feira, etc.).

```typescript
console.log(data.getDay());  // Exibe o dia da semana (0-6)
```

### 9. **getTime()** – Obter o Timestamp

```typescript
console.log(data.getTime());  // Exibe o número de milissegundos desde 1º de Janeiro de 1970
```

### 10. **setDate()** – Modificar o Dia do Mês

```typescript
data.setDate(15);  // Define o dia do mês como 15
console.log(data);
```

### 11. **setMonth()** – Modificar o Mês

```typescript
data.setMonth(4);  // Define o mês como Maio (0 = Janeiro)
console.log(data);
```

### 12. **setFullYear()** – Modificar o Ano

```typescript
data.setFullYear(2025);  // Define o ano como 2025
console.log(data);
```

### 13. **setHours()** – Modificar as Horas

```typescript
data.setHours(8);  // Define as horas como 8
console.log(data);
```

### 14. **setMinutes()** – Modificar os Minutos

```typescript
data.setMinutes(30);  // Define os minutos como 30
console.log(data);
```

## 🔄 Comparando Datas

Você pode comparar duas instâncias de `Date` com operadores como `>`, `<` e `===`.

Exemplo:

```typescript
const data1 = new Date("2024-11-11");
const data2 = new Date("2025-01-01");

console.log(data1 < data2);  // Exibe true, pois 2024-11-11 é anterior a 2025-01-01
```

## ✨ Formatação de Data

Para formatar datas de forma mais legível, você pode usar o método `toLocaleDateString()`:

```typescript
const dataFormatada = data.toLocaleDateString("pt-BR");
console.log(dataFormatada);  // Exibe a data formatada como "11/11/2024"
```

Você também pode passar opções de formatação:

```typescript
const dataFormatadaPersonalizada = data.toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(dataFormatadaPersonalizada);  // Exibe algo como "segunda-feira, 11 de novembro de 2024"
```

## 🛠️ Exemplo de Uso

### Adicionando 5 Dias à Data Atual

```typescript
const data = new Date();
data.setDate(data.getDate() + 5);  // Adiciona 5 dias
console.log(data);
```

### Subtraindo 1 Mês da Data Atual

```typescript
const data = new Date();
data.setMonth(data.getMonth() - 1);  // Subtrai 1 mês
console.log(data);
```

## ⚡ Vantagens do Uso de Date

1. **Manipulação de Tempo**: A classe `Date` fornece uma maneira simples e eficaz de manipular datas e horários em JavaScript e TypeScript.
   
2. **Compatibilidade**: O tipo `Date` é amplamente suportado por todos os navegadores modernos e ambientes JavaScript, como Node.js.

3. **Facilidade de Comparação**: Comparar datas se torna simples utilizando os métodos e operadores padrão.

## ⚠️ Cuidados ao Usar

1. **Timezone**: O tipo `Date` pode ser afetado por diferentes fusos horários. É importante garantir que você está lidando corretamente com fusos horários ao trabalhar com `Date` para evitar discrepâncias.

2. **Formato de Data**: O formato de exibição da data pode variar dependendo do navegador ou ambiente, por isso, é recomendável formatar explicitamente a data ao exibi-la para o usuário.

---

# 🚀 Node, NPM, Pacotes (Instalação) e Nodemon

## 🌱 O que é o Node.js?

O **Node.js** é um ambiente de execução para JavaScript no lado do servidor. Ele permite que você escreva aplicações de servidor usando JavaScript, que normalmente é usado apenas no navegador. O Node.js é altamente eficiente, pois é baseado em um modelo de I/O não-bloqueante, o que significa que pode lidar com múltiplas requisições simultâneas sem ficar esperando por uma resposta antes de passar para a próxima.

### 🌍 Vantagens do Node.js:
- **Assíncrono e não-bloqueante:** Node.js usa operações assíncronas, tornando-o ideal para aplicações de rede e servidores com alta demanda de conexões simultâneas.
- **JavaScript no Backend:** Você pode usar a mesma linguagem tanto no cliente quanto no servidor.
- **Ecosistema rico:** Node.js tem uma vasta gama de pacotes e bibliotecas através do NPM, o que facilita o desenvolvimento de diversos tipos de aplicações.

## 📦 O que é o NPM?

O **NPM** (Node Package Manager) é o gerenciador de pacotes oficial do Node.js. Ele permite instalar, atualizar e gerenciar bibliotecas e pacotes que você pode usar no seu projeto Node.js. O NPM também facilita o gerenciamento de dependências e scripts no seu projeto.

### 🛠️ Comandos principais do NPM:
- **`npm install <pacote>`:** Instala pacotes e suas dependências.
- **`npm uninstall <pacote>`:** Remove pacotes do seu projeto.
- **`npm init` ou `npm init -y`**: Inicializa um novo projeto Node.js criando o arquivo `package.json`, onde as dependências e configurações do projeto são armazenadas.
- **`npm update`**: Atualiza os pacotes instalados para as versões mais recentes.

### 📂 O arquivo `package.json`:
Este arquivo contém todas as informações do seu projeto, incluindo as dependências (pacotes), scripts, versão do projeto e outras configurações essenciais. O `package.json` é fundamental para qualquer projeto Node.js, pois define como as dependências devem ser gerenciadas e as versões de pacotes utilizadas.

## ⏩ O que é o Nodemon?

O **Nodemon** é uma ferramenta que ajuda a automatizar o processo de reiniciar o servidor Node.js sempre que um arquivo do projeto é modificado. Em vez de ter que parar e iniciar o servidor manualmente a cada alteração no código, o Nodemon observa os arquivos e reinicia o servidor automaticamente.

### 🔧 Como usar o Nodemon:
- **Instalação global:** Para instalar o Nodemon globalmente no seu sistema, use o comando:
```bash
npm install -g nodemon
```
- **Executar com Nodemon:** Depois de instalado, você pode usar o Nodemon para iniciar o servidor. Em vez de rodar node index.js, você rodaria:
```bash
nodemon index.js
```
Isso fará com que o Nodemon observe alterações no seu código e reinicie automaticamente o servidor sempre que uma mudança for detectada.

### 🎯 Vantagens do Nodemon:
- **Reinício automático:** Nodemon reinicia o servidor automaticamente sempre que uma mudança nos arquivos é detectada, facilitando o desenvolvimento sem a necessidade de reiniciar manualmente.
- **Configuração simples:** Basta substituir o comando node por nodemon na linha de execução do seu projeto.

---

# 🚀 Dev, Build, Deploy

## 🛠️ O que é o comando "dev"?

O comando **"dev"** é utilizado para rodar a aplicação em ambiente de desenvolvimento. Ele normalmente está configurado no arquivo `package.json` para usar o **Nodemon**, que é uma ferramenta que reinicia automaticamente o servidor quando mudanças no código são detectadas. Esse comando facilita o desenvolvimento, pois não é necessário reiniciar manualmente o servidor sempre que há alterações no código.

### 🔧 Configuração do comando "dev":
O comando **"dev"** está configurado para rodar o Nodemon com o arquivo de entrada `src/index.ts`, que é onde o código TypeScript será executado:
```bash
"scripts": {
  "dev": "nodemon src/index.ts"
}
```

Para rodar o projeto em modo de desenvolvimento, basta usar:
```bash
npm run dev
```
Isso iniciará o servidor e o monitorará para qualquer alteração nos arquivos do projeto, automaticamente reiniciando o servidor quando necessário.

---

## 🏗️ O que é o comando "build"?

O comando **"build"** é utilizado para compilar o código-fonte TypeScript para JavaScript. O TypeScript é um superconjunto do JavaScript, então o código precisa ser compilado para ser executado no ambiente de produção.

### 🔧 Configuração do comando "build":
No arquivo `package.json`, o comando **"build"** usa o compilador TypeScript (`tsc`) para transformar o código TypeScript em JavaScript. A configuração pode ser vista abaixo:
```bash
"scripts": {
  "build": "tsc"
}
```

Para gerar os arquivos JavaScript a partir do código TypeScript, basta rodar o comando:
```bash
npm run build
```

Isso criará os arquivos JavaScript na pasta `dist`, conforme a configuração do `tsconfig.json`.

---

## 🚀 O que é o comando "start"?

O comando **"start"** é utilizado para executar a aplicação em produção. Depois de compilar o código TypeScript para JavaScript com o comando **"build"**, você pode rodar o código gerado em `dist/index.js` usando o comando **"start"**.

### 🔧 Configuração do comando "start":
No arquivo `package.json`, o comando **"start"** é configurado para rodar o arquivo JavaScript compilado:
```bash
"scripts": {
  "start": "node dist/index.js"
}
```

Para rodar o projeto em produção (usando o código compilado), basta usar:
```bash
npm start
```
O comando `npm start` é uma maneira prática de iniciar o processo principal de um projeto Node.js, seja rodando um servidor, um script de inicialização ou outras tarefas essenciais que foram configuradas no package.json.
Esse comando inicia a aplicação sem o uso do Nodemon, já que é para o ambiente de produção e, normalmente, você não quer reiniciar o servidor a cada modificação no código.

---

## 📦 Resumo dos comandos no package.json

Aqui está um resumo das configurações no arquivo `package.json` para os comandos **dev**, **build** e **start**:

```bash
"scripts": {
  "dev": "nodemon src/index.ts",  # Para rodar o projeto em desenvolvimento
  "build": "tsc",                 # Para compilar o código TypeScript para JavaScript
  "start": "node dist/index.js"   # Para rodar o projeto em produção (usando o código compilado)
}
```

Com esses comandos, você pode facilmente alternar entre os diferentes ambientes de desenvolvimento e produção, facilitando o fluxo de trabalho.
