"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventosFuturos = eventosFuturos;
const chalk_1 = __importDefault(require("chalk"));
const eventos_1 = require("../data/eventos");
// Exibir eventos futuros.
function eventosFuturos() {
    const dataAtual = new Date();
    const filtrarEvento = eventos_1.eventos.filter((evento) => evento.date > dataAtual);
    if (filtrarEvento) {
        console.log('\n| PRÓXIMOS EVENTOS |\n');
        filtrarEvento.forEach((evento) => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    }
}
