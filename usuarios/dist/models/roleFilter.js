"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleFilter = roleFilter;
const users_1 = require("../data/users");
// Listar usuários filtrados pelo cargo.
function roleFilter(userRole) {
    const filterUsers = users_1.users.filter((user) => user.role == userRole);
    if (filterUsers.length > 0) {
        console.log('\n-------------------------| USERS |-------------------------\n');
        filterUsers.forEach((user) => console.log(`Id: ${user.id} \nNome: ${user.nome} \nRole: ${user.role}\n`));
        console.log('-------------------------------------------------------\n');
    }
    else {
        console.log('Nenhum usuário possui este cargo.');
    }
}
