import { Usuario } from "../models/Usuario";
import { criarUsuario } from "../models/criarUsuario";

export const usuarios: Usuario[] = []

criarUsuario('Usuário 1', 'usuario1@gmail.com', 'Usuario1', 18)
criarUsuario('Usuário 2', 'usuario2.com'      , 'usuario2', 18)
criarUsuario('Usu3'     , 'usuario3@gmail.com', 'Usuario3', 18)
criarUsuario('Usu4'     , 'usuario4.com'      , 'usuario4', 17)