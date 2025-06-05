"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarEventos = listarEventos;
const chalk_1 = __importDefault(require("chalk"));
const eventos_1 = require("../data/eventos");
// Listar todos os eventos cadastrados.
function listarEventos() {
    console.log('\n------------------------------| EVENTOS |------------------------------\n');
    eventos_1.eventos.forEach(evento => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    console.log('-----------------------------------------------------------------------\n');
}
