
function agregarOrigen(){
    $('#idSelOrigen').append(`
      <option value=''>Seleccione</option>
      <option value='boston'>Boston, USA</option>
      <option value='chicago'>Chicago, USA</option>
      <option value='edmonton'>Edmonton, CA</option>
        `)
}

function agregarDestino(){
    $('#idSelDestino').append(`
      <option value=''>Seleccione</option>
      <option value='paris'>Paris, FR</option>
      <option value='venecia'>Venecia, IT</option>
      <option value='seatle'>Seatle, USA</option>
      `)
}

function identificarEscala(ini, ter){
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

function mostrarItinerario(ini,ter,dti,dtt){
    if(ini === '' || ter === ''){
        $('#contenedor-itinerario').addClass('d-none')
    }else{
        $('#contenedor-itinerario').removeClass('d-none')
    }
}

var valOrigen,valDestino,nameOrigen,nameDestino, fechOrigen,fechDestino, mostrarItinerario

$(document).ready(function(){
    agregarOrigen()
    agregarDestino()

    $(document).on('change','#idSelOrigen',function(){
        valOrigen = $('#idSelOrigen').val()
        valDestino = $('#idSelDestino').val()

        mostrarItinerario(valOrigen,valDestino)

        nameOrigen = $('option:selected','#idSelOrigen').text()
        nameDestino = $('option:selected','#idSelDestino').text()

        $('#idDetailOrigen').html(nameOrigen)
        $('#idDetailDestino').html(nameDestino)
        informarEscala(identificarEscala(valOrigen,valDestino))
    })
    $(document).on('change','#idSelDestino',function(){
        valOrigen = $('#idSelOrigen').val()
        valDestino = $('#idSelDestino').val()

        mostrarItinerario(valOrigen,valDestino)

        nameOrigen = $('option:selected','#idSelOrigen').text()
        nameDestino = $('option:selected','#idSelDestino').text()

        $('#idDetailOrigen').html(nameOrigen)
        $('#idDetailDestino').html(nameDestino)
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
/*
    mostrarItinerario = (valOrigen !== '' && valDestino !== '')
    alert(mostrarItinerario)

    if(mostrarItinerario){
        $('#contenedor-itinerario').removeClass('d-none')
    }else{
        $('#contenedor-itinerario').addClass('d-none')
    }
*/
})

/*
Chicago, USA > Venecia, IT.
• Boston, USA > Paris, FR.
*///let lvlToFind = $('#idDigiLvl').val();
/*
idDetalleFechaOrigen
idDetalleFechaDestino
*/
/*
var destino = $('option:selected', "#destino").text()
$("#opcion-destino").html(destino)
*//*
document.getElementById('idDetailOrigen').innerHTML = ini.toUpperCase()
document.getElementById('idDetailDestino').innerHTML = ter.toUpperCase()
*/