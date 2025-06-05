"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarEvento = deletarEvento;
const eventos_1 = require("../data/eventos");
// Deletar evento pelo Id.
function deletarEvento(id) {
    const filtrarEvento = eventos_1.eventos.findIndex((evento) => evento.id == id);
    if (filtrarEvento !== -1) {
        eventos_1.eventos.splice(filtrarEvento, 1);
    }
}
