import { Role } from "../types/Role"

// Interface de um Usuário.
export interface User {
    id: string
    nome: string
    role: Role
}
