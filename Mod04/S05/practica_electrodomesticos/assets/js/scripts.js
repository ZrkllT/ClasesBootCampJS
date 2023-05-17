import Electrodomestico from './clases/electrodomestico.js'

var colores = ['Blanco','Gris','Azul','Negro']
var listElectro = []
function listaColores(){
    $('#selColor').html(`
        <option value="sel">Seleccionar</option>
        `)
    /**/
    for(const color of colores){
        $('#selColor').append(`
            <option value="${color}">${color}</color>
            `)
    }/**/
}

function eliminarFila(iad){
    if(confirm('¿Esta seguro que desea eliminar el Electrodomestico?')){
        listElectro.splice(iad,1)
        dibujarElectro()
    }
}

function agregarElectro(){
    let nombre = $('#inNombre').val()
    let color = $('#selColor').val()

    if(nombre == ''){
        $('#msg-nombre').removeClass('d-none')
        $('#msg-nombre').html('Por favor Ingrese el nombre del Articulo')
        $('#inNombre').css({ "border" : "1px solid red"})
        return
    }else{
        $('#msg-nombre').addClass('d-none')
    }

    if(color == '' || color == 'sel'){
        $('#msg-select').removeClass('d-none')
        $('#msg-select').html('Por favor Seleccione un color para el Articulo')
        $('#selColor').css({ "border" : "1px solid red"})
        return
    }else{
        $('#msg-select').addClass('d-none')
    }

    listElectro.push(new Electrodomestico(nombre,color))
    $('#btnLimpiar').click()
    dibujarElectro()
    $('#inNombre').focus()
}

function dibujarElectro(){
    $('#tableElectro tbody').html('')
    $('#spTotalRegistros').text(listElectro.length)
    listElectro.forEach((electro,index) =>{
        $('#tableElectro tbody').append(`
            <tr id="${index}">
              <td>${index+1}</td>
              <td>${electro.nombre}</td>
              <td>${electro.color}</td>
              <td><button data-key='${index}' class="btn btn-sm btn-danger">X</button></td>
            </tr>
            `)
    })
}


$(document).ready(function(){
    listaColores()
    $(document).on('keypress','#inNombre',function(k){
        $('#msg-nombre').addClass('d-none')
        $('#inNombre').css({"border" : "1px solid #c8c8c8"})
        if(k.keyCode === 13){ /*enter*/
            //agregarElectro()
        }
    })

    $(document).on('change','#selColor',function(){
        $('#msg-select').addClass('d-none')
        $('#selColor').css({"border" : "1px solid #c8c8c8"})
    })

    $(document).on('click','#btnRegistrar',function(event){
        event.preventDefault()
        agregarElectro()
    })

    $(document).on('mouseenter','#tableElectro tbody tr',function(){
        $(this).css({ "background" : "#FEF9E7", "color": "blue"})
    })
    $(document).on('mouseleave','#tableElectro tbody tr',function(){
        $(this).css({ "background" : "white", "color": "black"})
    })

    $(document).on('click','#tableElectro tbody button',function(){
        eliminarFila($(this).data('key'))
    })
})