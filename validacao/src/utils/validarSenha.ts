import PasswordValidator from 'password-validator'

// Definindo as regras para a senha.
export const validarSenha = new PasswordValidator()
    .is().min(8)       // Mínimo de 8 caracteres.
    .has().uppercase() // Pelo menos uma letra maiúscula.
    .has().lowercase() // Pelo menos uma letra minúscula.
    .has().digits()    // Pelo menos um número.