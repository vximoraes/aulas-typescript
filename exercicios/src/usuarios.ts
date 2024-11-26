import { v4 as uuid } from 'uuid'
const idUser: string = uuid()

enum Role {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest"
}

interface User {
    id: string
    nome: string
    role: Role
}

const usersList: User[] = [
    { id: idUser, nome: "Vinícius Almeida Moraes"    , role: Role.ADMIN },
    { id: idUser, nome: "Micaelly Nascimento Queiroz", role: Role.GUEST },
    { id: idUser, nome: "Vini", role: Role.USER },
    { id: idUser, nome: "Mica", role: Role.USER },
]  

function roleFilter(userRole: Role){
    const filteredUsers: User[] = usersList.filter((user) => user.role == userRole)

    if (filteredUsers) {
        console.log('\n-------------------------| USERS |-------------------------\n')
        filteredUsers.forEach((user) => console.log(`Id: ${user.id} \nNome: ${user.nome} \nRole: ${user.role}\n`))
        console.log('-------------------------------------------------------\n')
    }
}

roleFilter(Role.USER)