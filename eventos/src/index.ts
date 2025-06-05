import { adicionarEvento } from './models/adicionarEvento'
import { listarEventos } from './models/listarEventos'
import { listarEventoEspecifico } from './models/listarEventoEspecifico'
import { deletarEvento } from './models/deletarEvento'
import { eventosFuturos } from './models/eventosFuturos'

adicionarEvento('Formatura IFRO' , new Date("2023-12-21T00:00:00"))
adicionarEvento('Natal'          , new Date("2024-12-25T00:00:00"))
adicionarEvento('Ano Novo'       , new Date("2025-01-01T00:00:00"))

listarEventos()

listarEventoEspecifico('Natal')

deletarEvento('idTeste')

listarEventos()

eventosFuturos()