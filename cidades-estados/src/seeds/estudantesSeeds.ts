import { Estudante } from "../models/Estudante"
import { cidadesSeeds } from "./cidadesSeeds"
import { v4 as uuid } from "uuid"

export let estudantes: Estudante[] = [
    { id: uuid(), nome: 'Vinícius Almeida Moraes', email: 'viniciusmoraesvha@gmail.com', cidade: cidadesSeeds[0]},
    { id: uuid(), nome: 'Micaelly Nascimento Queiroz', email: 'queirozmica@gmail.com', cidade: cidadesSeeds[1]}
]