import { Role } from '../types/Role'
import { User } from '../models/User'
import { users } from '../data/users'

export function createUser(id: string, nome: string, role: Role): void {
    const newUser: User = {
        id: id,
        nome: nome,
        role: role
    }
    users.push(newUser)
}

