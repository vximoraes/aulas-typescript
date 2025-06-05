"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Role_1 = require("./types/Role");
const createUser_1 = require("./models/createUser");
const roleFilter_1 = require("./models/roleFilter");
// Criação de novos usuários.
(0, createUser_1.createUser)((0, uuid_1.v4)(), 'Vinícius Almeida Moraes', Role_1.Role.ADMIN);
(0, createUser_1.createUser)((0, uuid_1.v4)(), 'Micaelly Nascimento Queiroz', Role_1.Role.GUEST);
(0, createUser_1.createUser)((0, uuid_1.v4)(), 'Vini', Role_1.Role.USER);
(0, createUser_1.createUser)((0, uuid_1.v4)(), 'Mica', Role_1.Role.USER);
// Filtrando usuários por sua Role.
(0, roleFilter_1.roleFilter)(Role_1.Role.USER);
