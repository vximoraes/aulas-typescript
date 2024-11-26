import { v4 as uuid } from 'uuid'
import chalk from 'chalk'

// Interface de um Evento.
interface Event {
    id: string
    name: string
    date: Date
}

// Array eventos.
const eventos: Event[] = [
    {id: 'idTeste', name: 'Evento Teste Para Deletar Pelo Id', date: new Date("2025-01-23")}
]

// Adicionar novo evento.
function adicionarEvento(nome: string, data: Date) {
    const idEvento: string = uuid()

    let novoEvento: Event = {
        id: idEvento,
        name: nome,
        date: data
    }

    eventos.push(novoEvento)
}

adicionarEvento('Formatura IFRO' , new Date("2023-12-21T00:00:00"))
adicionarEvento('Natal'          , new Date("2024-12-25T00:00:00"))
adicionarEvento('Ano Novo'       , new Date("2025-01-01T00:00:00"))

// Listar todos os eventos cadastrados.
function listarTodosEventos() {
    console.log('\n------------------------------| EVENTOS |------------------------------\n')
    eventos.forEach(evento => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    console.log('-----------------------------------------------------------------------\n')
}

listarTodosEventos()

// Listar eventos filtrados pelo Nome.
function listarEventoEspecifico(nome: string) {
    const filtrarEvento: Event[] = eventos.filter((evento) => evento.name == nome)

    if (filtrarEvento.length > 0) {
        console.log(`\n| EVENTOS: ${nome} |\n`)
        filtrarEvento.forEach((evento) => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    } else {
        console.log('\nEvento não encontrado.\n')
    }
}

listarEventoEspecifico('Natal')

// Deletar evento pelo Id.
function deletarEvento(id: string) {
    const filtrarEvento = eventos.findIndex((evento) => evento.id == id)

    if (filtrarEvento !== -1) {
        eventos.splice(filtrarEvento, 1)
    }
}

deletarEvento('idTeste')

listarTodosEventos()

// Exibir eventos futuros.
function eventosFuturos() {
    const dataAtual: Date = new Date()
    const filtrarEvento: Event[] = eventos.filter((evento) => evento.date > dataAtual)

    if (filtrarEvento) {
        console.log('\n| PRÓXIMOS EVENTOS |\n')
        filtrarEvento.forEach((evento) => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    }
}

eventosFuturos()