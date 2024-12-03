import emailValidator from 'email-validator'
import { Usuario } from '../models/Usuario'
import { validarSenha } from '../utils/validarSenha'

// Função para validar os usuários.
export function validarUsuario(usuario: Usuario): string[] {
    let mensagens: string[] = []

    // Validação do username.
    if (usuario.username.length < 5) {
        mensagens.push('O username deve conter no mínimo 5 caracteres')
    }

    // Validação do email.
    if (!emailValidator.validate(usuario.email)) {
        mensagens.push('O email deve ser um endereço de e-mail válido')
    }

    // Validação da senha.
    if (!validarSenha.validate(usuario.password)) {
        mensagens.push('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.')
    }

    // Validação da idade.
    if (usuario.idade < 18) {
        mensagens.push('A idade deve ser maior ou igual a 18 anos.')
    }

    return mensagens
}