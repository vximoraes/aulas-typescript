import { Estados } from "../enums/Estados"
import { Cidade } from "../models/Cidade"
import { v4 as uuid } from "uuid"

export const cidadesSeeds: Cidade[] = [
    { id: uuid(), nome: 'Vilhena', estado: Estados.RO },
    { id: uuid(), nome: 'Colorado do Oeste', estado: Estados.RO }
]