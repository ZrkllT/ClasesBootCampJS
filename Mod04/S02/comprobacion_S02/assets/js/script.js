import { UsuarioBasico } from './clases/basico.js'
import { UsuarioVIP } from './clases/vip.js'

function crearUsuarioRandom(){
}

$(document).ready(function(){
    $("#enlace-basico").click(function() {
        $("#enlace-basico").addClass('active')
        $("#enlace-vip").removeClass('active')
        $("#info-basico").removeClass("d-none")
        $("#info-vip").addClass("d-none")
        $("#contenedor-usuario").addClass("d-none")
    })

    $("#enlace-vip").click(function() {
        $("#enlace-vip").addClass('active')
        $("#enlace-basico").removeClass('active')
        $("#info-vip").removeClass("d-none")
        $("#info-basico").addClass("d-none")
        $("#contenedor-usuario").removeClass("d-none")
    })


    $('#btn-enviar').click(function(event){
        event.preventDefault()

        let tipo = $('#enlace-vip').hasClass('active') ? 'vip' : 'basico'
        let email = $('#txt-email').val()
        let password = $('#txt-password').val()
        let terminos = $('#check-terminos').prop('checked')

        let usuario, objetoUsuario
        if(tipo === 'vip'){
            usuario = $('#txt-usuario').val()
            objetoUsuario = new UsuarioVIP(usuario,email,password,terminos)
        }else{
            objetoUsuario = new UsuarioBasico(email,password,terminos)
        }

        //objetoUsuario.mostrarDatos()
        $('#modalBienvenida').modal('show');
    })
})