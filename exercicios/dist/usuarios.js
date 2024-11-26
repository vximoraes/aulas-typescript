"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const idUser = (0, uuid_1.v4)();
// Enum de cargos.
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
    Role["SLA"] = "Sla";
})(Role || (Role = {}));
// Array de usuários.
const usersList = [
    { id: idUser, nome: "Vinícius Almeida Moraes", role: Role.ADMIN },
    { id: idUser, nome: "Micaelly Nascimento Queiroz", role: Role.GUEST },
    { id: idUser, nome: "Vini", role: Role.USER },
    { id: idUser, nome: "Mica", role: Role.USER },
];
// Listar usuários filtrados pelo cargo.
function roleFilter(userRole) {
    const filterUsers = usersList.filter((user) => user.role == userRole);
    if (filterUsers.length > 0) {
        console.log('\n-------------------------| USERS |-------------------------\n');
        filterUsers.forEach((user) => console.log(`Id: ${user.id} \nNome: ${user.nome} \nRole: ${user.role}\n`));
        console.log('-------------------------------------------------------\n');
    }
    else {
        console.log('Nenhum usuário possui este cargo.');
    }
}
roleFilter(Role.ADMIN);
