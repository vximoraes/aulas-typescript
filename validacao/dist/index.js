"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validarUsuario_1 = require("./models/validarUsuario");
// Criando usuários.
const usuario1 = {
    username: 'Usuário 1',
    email: 'usuario1@gmail.com',
    password: 'Usuario1',
    idade: 18
};
const usuario2 = {
    username: 'Usuário 2',
    email: 'usuario2.com',
    password: 'usuario2',
    idade: 18
};
const usuario3 = {
    username: 'Usu3',
    email: 'usuario3@gmail.com',
    password: 'Usuario3',
    idade: 18
};
const usuario4 = {
    username: 'Usu4',
    email: 'usuario4.com',
    password: 'usuario4',
    idade: 17
};
// Validação dos usuários.
console.log((0, validarUsuario_1.validarUsuario)(usuario1));
console.log((0, validarUsuario_1.validarUsuario)(usuario2));
console.log((0, validarUsuario_1.validarUsuario)(usuario3));
console.log((0, validarUsuario_1.validarUsuario)(usuario4));
