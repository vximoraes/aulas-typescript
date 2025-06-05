"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarEventoEspecifico = listarEventoEspecifico;
const chalk_1 = __importDefault(require("chalk"));
const eventos_1 = require("../data/eventos");
// Listar eventos filtrados pelo Nome.
function listarEventoEspecifico(nome) {
    const filtrarEvento = eventos_1.eventos.filter((evento) => evento.name == nome);
    if (filtrarEvento.length > 0) {
        console.log(`\n| EVENTOS: ${nome} |\n`);
        filtrarEvento.forEach((evento) => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    }
    else {
        console.log('\nEvento não encontrado.\n');
    }
}
