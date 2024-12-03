import { usuarios } from "../data/usuarios";

// Função para criar novos usuários.
export function criarUsuario(username: string, email: string, password: string, idade: number) {
    const novoUsuario = {
        username: username,
        email: email,
        password: password,
        idade: idade
    }

    usuarios.push(novoUsuario)
}