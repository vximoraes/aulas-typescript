import { validarUsuario } from './models/validarUsuario'
import { usuarios } from './data/usuarios'

// Validação dos usuários.
usuarios.forEach(usuario => {
    console.log(validarUsuario(usuario))
})