"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const chalk_1 = __importDefault(require("chalk"));
// Array eventos.
const eventos = [
    { id: 'idTeste', name: 'Evento Teste Para Deletar Pelo Id', date: new Date("2025-01-23") }
];
// Adicionar novo evento.
function adicionarEvento(nome, data) {
    const idEvento = (0, uuid_1.v4)();
    let novoEvento = {
        id: idEvento,
        name: nome,
        date: data
    };
    eventos.push(novoEvento);
}
adicionarEvento('Formatura IFRO', new Date("2023-12-21T00:00:00"));
adicionarEvento('Natal', new Date("2024-12-25T00:00:00"));
adicionarEvento('Ano Novo', new Date("2025-01-01T00:00:00"));
// Listar todos os eventos cadastrados.
function listarTodosEventos() {
    console.log('\n------------------------------| EVENTOS |------------------------------\n');
    eventos.forEach(evento => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    console.log('-----------------------------------------------------------------------\n');
}
listarTodosEventos();
// Listar eventos filtrados pelo Nome.
function listarEventoEspecifico(nome) {
    const filtrarEvento = eventos.filter((evento) => evento.name == nome);
    if (filtrarEvento.length > 0) {
        console.log(`\n| EVENTOS: ${nome} |\n`);
        filtrarEvento.forEach((evento) => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    }
    else {
        console.log('\nEvento não encontrado.\n');
    }
}
listarEventoEspecifico('Natal');
// Deletar evento pelo Id.
function deletarEvento(id) {
    const filtrarEvento = eventos.findIndex((evento) => evento.id == id);
    if (filtrarEvento !== -1) {
        eventos.splice(filtrarEvento, 1);
    }
}
deletarEvento('idTeste');
listarTodosEventos();
// Exibir eventos futuros.
function eventosFuturos() {
    const dataAtual = new Date();
    const filtrarEvento = eventos.filter((evento) => evento.date > dataAtual);
    if (filtrarEvento) {
        console.log('\n| PRÓXIMOS EVENTOS |\n');
        filtrarEvento.forEach((evento) => console.log(`${chalk_1.default.bold('Id:')} ${evento.id} \n${chalk_1.default.bold('Nome:')} ${evento.name} \n${chalk_1.default.bold('Data:')} ${evento.date}\n`));
    }
}
eventosFuturos();
