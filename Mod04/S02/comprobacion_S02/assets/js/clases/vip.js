import { UsuarioBasico } from './basico.js'

export class UsuarioVIP extends UsuarioBasico{
    constructor(usuario,email,password,terminos){
        super(email,password,terminos)
        this.usuario = usuario
    }
    mostrarDatos(){
        alert(`Usuario: ${this.usuario} | Email: ${this.email} | Contraseña: ${this.password}`)
    }
}