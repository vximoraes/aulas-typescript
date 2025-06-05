import chalk from 'chalk'
import { Event } from '../models/Event'
import { eventos } from "../data/eventos"

// Listar eventos filtrados pelo Nome.
export function listarEventoEspecifico(nome: string) {
    const filtrarEvento: Event[] = eventos.filter((evento) => evento.name == nome)

    if (filtrarEvento.length > 0) {
        console.log(`\n| EVENTOS: ${nome} |\n`)
        filtrarEvento.forEach((evento) => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    } else {
        console.log('\nEvento não encontrado.\n')
    }
}