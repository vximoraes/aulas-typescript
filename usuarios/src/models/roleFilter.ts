import { Role } from '../types/Role'
import { User } from '../models/User'
import { users } from '../data/users'

// Listar usuários filtrados pelo cargo.
export function roleFilter(userRole: Role) {
    const filterUsers: User[] = users.filter((user) => user.role == userRole)

    if (filterUsers.length > 0) {
        console.log('\n-------------------------| USERS |-------------------------\n')
        filterUsers.forEach((user) => console.log(`Id: ${user.id} \nNome: ${user.nome} \nRole: ${user.role}\n`))
        console.log('-------------------------------------------------------\n')
    } else {
        console.log('Nenhum usuário possui este cargo.')
    }
}