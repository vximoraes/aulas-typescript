import { v4 as uuid } from 'uuid'
const idUser: string = uuid()

// Enum de cargos.
enum Role {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest",
    SLA = "Sla"
}

// Interface de um Usuário.
interface User {
    id: string
    nome: string
    role: Role
}

// Array de usuários.
const usersList: User[] = [
    { id: idUser, nome: "Vinícius Almeida Moraes"    , role: Role.ADMIN },
    { id: idUser, nome: "Micaelly Nascimento Queiroz", role: Role.GUEST },
    { id: idUser, nome: "Vini", role: Role.USER },
    { id: idUser, nome: "Mica", role: Role.USER },
]  

// Listar usuários filtrados pelo cargo.
function roleFilter(userRole: Role) {
    const filterUsers: User[] = usersList.filter((user) => user.role == userRole)

    if (filterUsers.length > 0) {
        console.log('\n-------------------------| USERS |-------------------------\n')
        filterUsers.forEach((user) => console.log(`Id: ${user.id} \nNome: ${user.nome} \nRole: ${user.role}\n`))
        console.log('-------------------------------------------------------\n')
    } else {
        console.log('Nenhum usuário possui este cargo.')
    }
}

roleFilter(Role.ADMIN)