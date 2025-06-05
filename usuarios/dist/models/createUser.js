"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const users_1 = require("../data/users");
function createUser(id, nome, role) {
    const newUser = {
        id: id,
        nome: nome,
        role: role
    };
    users_1.users.push(newUser);
}
