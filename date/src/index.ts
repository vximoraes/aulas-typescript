enum Logradouro {
    Alameda    = 'Alameda',
    Avenida    = 'Avenida',
    Campo      = 'Campo',
    Chácara    = 'Chácara',
    Colônia    = 'Colônia',
    Condomínio = 'Condomínio',
    Conjunto   = 'Conjunto',
    Distrito   = 'Distrito',
    Esplanada  = 'Esplanada',
    Estação    = 'Estação'
}

enum Uf{
    AC = 'Acre',
    AL = 'Alagoas',
    AP = 'Amapá',
    AM = 'Amazonas',
    BA = 'Bahia',
    CE = 'Ceará',
    DF = 'Distrito Federal',
    ES = 'Espírito Santo',
    GO = 'Goiás',
    MA = 'Maranhão',
    MT = 'Mato Grosso',
    MS = 'Mato Grosso do Sul',
    MG = 'Minas Gerais',
    PA = 'Pará',
    PB = 'Paraíba',
    PR = 'Paraná',
    PE = 'Pernambuco',
    PI = 'Piauí',
    RJ = 'Rio de Janeiro',
    RN = 'Rio Grande do Norte',
    RS = 'Rio Grande do Sul',
    RO = 'Rondônia',
    RR = 'Roraima',
    SC = 'Santa Catarina',
    SP = 'São Paulo',
    SE = 'Sergipe',
    TO = 'Tocantins'
}

interface Cidade {
    nome: string,
    estado: Uf
}

let vilhena: Cidade = {
    nome: 'Vilhena',
    estado: Uf.RO
}

interface Endereco {
    logradouro: Logradouro,
    numero: number,
    bairro: string
    cidade?: Cidade,
    UF?: Uf
}

let endereco: Endereco = {
    logradouro: Logradouro.Avenida,
    numero: 3840,
    bairro: 'Centro',
    cidade: vilhena,
    UF: Uf.RO
}

interface Estudante {
    nome: string,
    dataNascimento: Date,
    dataDeCadastro: Date,
    logradouro: Logradouro,
    numero: Endereco,
    bairro: Endereco
    cidade: Endereco,
    UF: Uf
}

let estudante: Estudante = {
    nome: 'Vinícius Almeida Moraes',
    dataNascimento: new Date('2005-06-23'),
    dataDeCadastro: new Date('2024-11-04'),
    logradouro: endereco.logradouro,
    numero: endereco,
    bairro: endereco,
    cidade: endereco,
    UF: Uf.RO
}

console.log(`Nome: ${estudante.nome}
Logradouro: ${estudante.logradouro}
Número: ${estudante.numero.numero}
Bairro: ${estudante.bairro.bairro}
Cidade: ${estudante.cidade.cidade?.nome}
UF: ${estudante.UF}
Data de Nascimento: ${estudante.dataNascimento.getDate() + 1}/${estudante.dataNascimento.getMonth() + 1}/${estudante.dataNascimento.getFullYear()}
Data de Cadastro: ${estudante.dataDeCadastro.getDate() + 1}/${estudante.dataDeCadastro.getMonth() + 1}/${estudante.dataDeCadastro.getFullYear()}`)