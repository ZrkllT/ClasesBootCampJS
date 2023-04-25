
function agregarOrigen(){
    $('#idSelOrigen').append(`
      <option value='boston'>Boston, USA</option>
      <option value='chicago'>Chicago, USA</option>
      <option value='edmonton'>Edmonton, CA</option>
        `)
}

function agregarDestino(){
    $('#idSelDestino').append(`
      <option value='paris'>Paris, FR</option>
      <option value='venecia'>Venecia, IT</option>
      <option value='seatle'>Seatle, USA</option>
      `)
}

function identificarEscala(ini, ter){
    document.getElementById('idDetailOrigen').innerHTML = ini.toUpperCase()
    document.getElementById('idDetailDestino').innerHTML = ter.toUpperCase()
    if((ini === 'chicago' && ter === 'venecia') || (ini === 'boston' && ter === 'paris')){
        return 1
    }else{
        return 0
    }
}

function informarEscala(escala){
    if(escala === 1){
        document.getElementById('idDetailEscala').innerHTML = '¡Ojo¡ Tu vuelo tiene una Escala';
    }else{
        document.getElementById('idDetailEscala').innerHTML = 'Tu vuelo no tiene escala';
    }
}

var valOrigen,valDestino, fechOrigen,fechDestino

$(document).ready(function(){
    agregarOrigen()
    agregarDestino()

    $(document).on('change','#idSelOrigen',function(){
        valOrigen = $('#idSelOrigen').val()
        valDestino = $('#idSelDestino').val()

        informarEscala(identificarEscala(valOrigen,valDestino))
    })
    $(document).on('change','#idSelDestino',function(){
        valOrigen = $('#idSelOrigen').val()
        valDestino = $('#idSelDestino').val()

        informarEscala(identificarEscala(valOrigen,valDestino))
    })
    $(document).on('change','#idFechaOrigen',function(){
        fechOrigen = $('#idFechaOrigen').val()
        document.getElementById('idDetalleFechaOrigen').innerHTML = fechOrigen
    })
    $(document).on('change','#idFechaDestino',function(){
        fechDestino = $('#idFechaDestino').val()
        document.getElementById('idDetalleFechaDestino').innerHTML = fechDestino
    })
})

/*
Chicago, USA > Venecia, IT.
• Boston, USA > Paris, FR.
*///let lvlToFind = $('#idDigiLvl').val();
/*
idDetalleFechaOrigen
idDetalleFechaDestino
*/