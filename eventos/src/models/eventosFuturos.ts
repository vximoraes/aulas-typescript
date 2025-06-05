import chalk from 'chalk'
import { Event } from '../models/Event'
import { eventos } from "../data/eventos"

// Exibir eventos futuros.
export function eventosFuturos() {
    const dataAtual: Date = new Date()
    const filtrarEvento: Event[] = eventos.filter((evento) => evento.date > dataAtual)

    if (filtrarEvento) {
        console.log('\n| PRÓXIMOS EVENTOS |\n')
        filtrarEvento.forEach((evento) => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    }
}