"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarSenha = void 0;
const password_validator_1 = __importDefault(require("password-validator"));
// Definindo as regras para a senha.
exports.validarSenha = new password_validator_1.default()
    .is().min(8) // Mínimo de 8 caracteres.
    .has().uppercase() // Pelo menos uma letra maiúscula.
    .has().lowercase() // Pelo menos uma letra minúscula.
    .has().digits(); // Pelo menos um número.
