"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarEvento = adicionarEvento;
const uuid_1 = require("uuid");
const eventos_1 = require("../data/eventos");
// Adicionar novo evento.
function adicionarEvento(nome, data) {
    const idEvento = (0, uuid_1.v4)();
    let novoEvento = {
        id: idEvento,
        name: nome,
        date: data
    };
    eventos_1.eventos.push(novoEvento);
}
