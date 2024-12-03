import { v4 as uuid } from 'uuid'
import { Role } from './types/Role'
import { createUser } from "./models/createUser"
import { roleFilter } from './models/roleFilter'

// Criação de novos usuários.
createUser(uuid(), 'Vinícius Almeida Moraes', Role.ADMIN)
createUser(uuid(), 'Micaelly Nascimento Queiroz', Role.GUEST)
createUser(uuid(), 'Vini', Role.USER)
createUser(uuid(), 'Mica', Role.USER)

// Filtrando usuários por sua Role.
roleFilter(Role.ADMIN)