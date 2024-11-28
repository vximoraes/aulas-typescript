import emailValidator from 'email-validator'
import PasswordValidator from 'password-validator';

// Definindo as regras para a senha.
const validarSenha = new PasswordValidator()
    .is().min(8)       // Mínimo de 8 caracteres.
    .has().uppercase() // Pelo menos uma letra maiúscula.
    .has().lowercase() // Pelo menos uma letra minúscula.
    .has().digits()    // Pelo menos um número.

// Interface para os usuários.
interface Usuario {
    username: string,
    email: string,
    password: string,
    idade: number
}

// Função para validar os usuários.
function validarUsuario(usuario: Usuario): string[] {
    let mensagens: string[] = [];

    // Validação do username.
    if (usuario.username.length < 5) {
        mensagens.push('O username deve conter no mínimo 5 caracteres');
    }

    // Validação do email.
    if (!emailValidator.validate(usuario.email)) {
        mensagens.push('O email deve ser um endereço de e-mail válido');
    }

    // Validação da senha.
    if (!validarSenha.validate(usuario.password)) {
        mensagens.push('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
    }

    // Validação da idade.
    if (usuario.idade < 18) {
        mensagens.push('A idade deve ser maior ou igual a 18 anos.');
    }

    return mensagens;
}

// Criando usuários.
let usuario1: Usuario = {
    username: 'Usuário 1',
    email: 'usuario1@gmail.com',
    password: 'Usuario1',
    idade: 18
}

let usuario2: Usuario = {
    username: 'Usuário 2',
    email: 'usuario2.com',
    password: 'usuario2',
    idade: 18
}

let usuario3: Usuario = {
    username: 'Usu3',
    email: 'usuario3@gmail.com',
    password: 'Usuario3',
    idade: 18
}

let usuario4: Usuario = {
    username: 'Usu4',
    email: 'usuario4.com',
    password: 'usuario4',
    idade: 17
}

// Validação dos usuários.
console.log(validarUsuario(usuario1))
console.log(validarUsuario(usuario2))
console.log(validarUsuario(usuario3))
console.log(validarUsuario(usuario4))