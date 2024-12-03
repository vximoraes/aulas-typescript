import chalk from 'chalk'
import { eventos } from '../data/eventos'

// Listar todos os eventos cadastrados.
export function listarEventos() {
    console.log('\n------------------------------| EVENTOS |------------------------------\n')
    eventos.forEach(evento => console.log(`${chalk.bold('Id:')} ${evento.id} \n${chalk.bold('Nome:')} ${evento.name} \n${chalk.bold('Data:')} ${evento.date}\n`))
    console.log('-----------------------------------------------------------------------\n')
}