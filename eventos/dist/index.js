"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adicionarEvento_1 = require("./models/adicionarEvento");
const listarEventos_1 = require("./models/listarEventos");
const listarEventoEspecifico_1 = require("./models/listarEventoEspecifico");
const deletarEvento_1 = require("./models/deletarEvento");
const eventosFuturos_1 = require("./models/eventosFuturos");
(0, adicionarEvento_1.adicionarEvento)('Formatura IFRO', new Date("2023-12-21T00:00:00"));
(0, adicionarEvento_1.adicionarEvento)('Natal', new Date("2024-12-25T00:00:00"));
(0, adicionarEvento_1.adicionarEvento)('Ano Novo', new Date("2025-01-01T00:00:00"));
(0, listarEventos_1.listarEventos)();
(0, listarEventoEspecifico_1.listarEventoEspecifico)('Natal');
(0, deletarEvento_1.deletarEvento)('idTeste');
(0, listarEventos_1.listarEventos)();
(0, eventosFuturos_1.eventosFuturos)();
