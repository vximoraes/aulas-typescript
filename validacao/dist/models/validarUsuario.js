"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarUsuario = validarUsuario;
const email_validator_1 = __importDefault(require("email-validator"));
const validarSenha_1 = require("../utils/validarSenha");
// Função para validar os usuários.
function validarUsuario(usuario) {
    let mensagens = [];
    // Validação do username.
    if (usuario.username.length < 5) {
        mensagens.push('O username deve conter no mínimo 5 caracteres');
    }
    // Validação do email.
    if (!email_validator_1.default.validate(usuario.email)) {
        mensagens.push('O email deve ser um endereço de e-mail válido');
    }
    // Validação da senha.
    if (!validarSenha_1.validarSenha.validate(usuario.password)) {
        mensagens.push('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
    }
    // Validação da idade.
    if (usuario.idade < 18) {
        mensagens.push('A idade deve ser maior ou igual a 18 anos.');
    }
    return mensagens;
}
