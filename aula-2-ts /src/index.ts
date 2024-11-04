interface Aluno { 
    nome: string,
    idade: number,
    matriculado: boolean,
    pcd?: boolean
    endereco: {
        logradouro : string,
        numero     : string,
        bairro     : string,
        cidade     : string,
        estado     : string
    }
    disciplinas: string[]
}

let novoAluno: Aluno = {
    nome: "Vinícius",
    idade: 19,
    matriculado: true,
    endereco: {
        logradouro : "Avenida Capitão Castro",
        numero     : "7562",
        bairro     : "Centro",
        cidade     : "Vilhena",
        estado     : "RO"
    },
    disciplinas: ["Matemática", "Geografia", "Ciências"]
}

interface Produto {
    nome: string,
    preco: number,
    categoria: string[],
    disponivel: boolean,
    desconto?: number,
    validade: string,
    fornecedor: string
}

let produto: Produto = {
    nome: "Café 3 Corações",
    preco: 20.00,
    categoria: ["Alimento", "Bem-estar"],
    disponivel: true,
    desconto: 5.00,
    validade: "2024-10-22",
    fornecedor: "3 Corações"
}

// Operador ternário
novoAluno.matriculado = false;
novoAluno.matriculado ? console.log("Situação: Matriculado") : console.log("Situação: Não Matriculado");