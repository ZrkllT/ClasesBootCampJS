//insertDate
function completarCero(o){
    if(o < 10){
        o = '0' + o
    }
    return o
}
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function escribeHoraFecha(){
    fechaHoy = new Date()

    horaHoy = fechaHoy.getHours()
    horaHoy = completarCero(horaHoy)
    minutoHoy = fechaHoy.getMinutes()
    minutoHoy = completarCero(minutoHoy)
    segundoHoy = fechaHoy.getSeconds()
    segundoHoy = completarCero(segundoHoy)

    diaHoy = fechaHoy.getDate()
    diaHoy = completarCero(diaHoy)
    mesHoy = fechaHoy.getMonth() + 1
    mesHoy = completarCero(mesHoy)
    annoHoy = fechaHoy.getFullYear()

    horaCompleta = horaHoy +':'+ minutoHoy +':'+ segundoHoy
    fechaCompleta = diaHoy +'/'+ mesHoy +'/'+ annoHoy

    document.getElementById('insertTime').innerHTML = horaCompleta
    document.getElementById('insertDate').innerHTML = fechaCompleta

    setTimeout("escribeHoraFecha()", 1000)
}

function escribeTerminalVuelo(){
    var nroTerminal = Math.ceil(Math.random()*20)
    nroTerminal = completarCero(nroTerminal)
    document.getElementById('terminalNumber').innerHTML = nroTerminal

    var nroVuelo = Math.ceil(Math.random()*1000)
    document.getElementById('flightNumber').innerHTML = nroVuelo
}

$(document).ready(function(){
    escribeHoraFecha()
    escribeTerminalVuelo()
    //window.alert('Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boletao de embarque. Manténgase atento a los avisos mediante esta plataforma.')
})


/*
$('#tablaAPI tbody').append(`
    <tr>
      <td>${data}</td>
    </tr>
    `)
*/