let userId: number = 1

enum Status {
    PENDENTE  = 'Pendente',
    CONCLUIDO = 'Concluído',
    CANCELADO = 'Cancelado'
}

interface Compromisso {
    id: number
    titulo: string,
    descricao: string,
    data: Date,
    hora: Date,
    status: Status
}

let compromissos: Compromisso[] = []

// Criar novo compromisso
let criarCompromisso = (id: number, titulo: string, descricao: string, data: Date, hora: Date, status: Status) => {
    let compromisso: Compromisso = {
        id: id,
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora: hora,
        status: status
    }
    compromissos.push(compromisso)
}

criarCompromisso(1, 'titulo', 'descricao', new Date('2005-06-23'), new Date('2005-06-23T10:20:30'), Status.PENDENTE)
criarCompromisso(2, 'titulo', 'descricao', new Date('2005-06-23'), new Date('2005-06-23T10:20:30'), Status.CONCLUIDO)
criarCompromisso(3, 'titulo', 'descricao', new Date('2005-06-23'), new Date('2005-06-23T10:20:30'), Status.CANCELADO)


// Listar compromissos
let listarCompromissos = () => {
    for (let i = 0; i < compromissos.length; i++) {
        console.log(`ID: ${compromissos[i].id} | Título: ${compromissos[i].titulo} | Descrição: ${compromissos[i].descricao} | Data: ${compromissos[i].data.getUTCDate()}/${compromissos[i].data.getUTCMonth()+1}/${compromissos[i].data.getUTCFullYear()} | Horário: ${compromissos[i].hora.getHours()}:${compromissos[i].hora.getMinutes()}:${compromissos[i].hora.getSeconds()} | ${compromissos[i].status}`)
    }
} 

// Listar compromissos por status
let listarCompromissosStatus = (status: Status) => {
    for (let i = 0; i < compromissos.length; i++) {
        if(compromissos[i].status == status)
        console.log(`ID: ${compromissos[i].id} | Título: ${compromissos[i].titulo} | Descrição: ${compromissos[i].descricao} | Data: ${compromissos[i].data.getUTCDate()}/${compromissos[i].data.getUTCMonth()+1}/${compromissos[i].data.getUTCFullYear()} | Horário: ${compromissos[i].hora.getHours()}:${compromissos[i].hora.getMinutes()}:${compromissos[i].hora.getSeconds()} | ${compromissos[i].status}`)
    }
}

let listarUnicoCompromisso = (id: number) => {
    for (let i = 0; i < compromissos.length; i++) {
        if(compromissos[i].id == id)
        console.log(`ID: ${compromissos[i].id} | Título: ${compromissos[i].titulo} | Descrição: ${compromissos[i].descricao} | Data: ${compromissos[i].data.getUTCDate()}/${compromissos[i].data.getUTCMonth()+1}/${compromissos[i].data.getUTCFullYear()} | Horário: ${compromissos[i].hora.getHours()}:${compromissos[i].hora.getMinutes()}:${compromissos[i].hora.getSeconds()} | ${compromissos[i].status}`)
    }
}

let deletarCompromisso = (id: number) => {
    for (let i = 0; i < compromissos.length; i++) {
        if (compromissos[i].id == id) {
            compromissos.splice
        }
    }
}

deletarCompromisso(3)

listarCompromissos()