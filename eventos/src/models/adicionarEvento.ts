import { v4 as uuid } from 'uuid'
import { Event } from '../models/Event'
import { eventos } from '../data/eventos'

// Adicionar novo evento.
export function adicionarEvento(nome: string, data: Date) {
    const idEvento: string = uuid()

    let novoEvento: Event = {
        id: idEvento,
        name: nome,
        date: data
    }

    eventos.push(novoEvento)
}