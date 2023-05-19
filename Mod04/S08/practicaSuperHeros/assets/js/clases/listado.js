import funciones from '../utils/funciones.js'
const { peticionAjax } = funciones

var token = '10225832066284806'
var url = `https://superheroapi.com/api.php/${token}/`
var listaHerosPeticion = []

async function buscarListadoHero(desde,hasta){
    if(desde > hasta){
        alert('El número final no puede ser inferior al inicial')
        return
    }
    try{
        for(let index = desde; index <= hasta; index++){
            var urlBusqueda = url+index

            var respuesta2 = await peticionAjax(urlBusqueda)
            listaHerosPeticion.push(respuesta2)
        }
    } catch(error){
        alert('petición falla en sincorono D:')
    }
    if(listaHerosPeticion.length > 0){
        dibujarHero(listaHerosPeticion)
    }
}

function buscarListadoAsincrono(desde,hasta){
    if(desde > hasta){
        alert('El número final no puede ser inferior al inicial')
        return
    }
    for(let index = desde; index <= hasta; index++){
        var urlBusqueda = url+index

        var respuesta2 = peticionAjax(urlBusqueda)
        listaHerosPeticion.push(respuesta2)
    }
    if(listaHerosPeticion.length > 0){
        Promise.all(listaHerosPeticion).then((data) =>{
            dibujarHero(data)
        }).catch((error) =>{
            alert('petición falla en asincrono D:')
        })
    }
}

function dibujarHero(arrHero){
    $('#listHeroList').html('')
    arrHero.forEach(element =>{
        let raza = element.appearance.race === 'null' ? 'No Race' : element.appearance.race
        let [,peso] = element.appearance.weight
        let [,altura] = element.appearance.height
        $('#listHeroList').append(`
            <div class="col-12 col-sm-6 col-lg-4 mt-2">
              <div class="card">
                <img src="${element.image.url}" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <div><span class="fw-bold">Genero: </span>${element.appearance.gender}</div>
                  <div><span class="fw-bold">Raza: </span>${raza}</div>
                  <div><span class="fw-bold">Altura: </span>${altura}</div>
                  <div><span class="fw-bold">Peso: </span>${peso}</div>
                </div>
              </div>
            </div>
            `)
    })
}


$(document).ready(function(){
    $('#formListHeros').submit(function(event){
        event.preventDefault()

        let selDesde = Number($('#idSelDesde').val())
        let selHasta = Number($('#idSelHasta').val())

        //buscarListadoHero(selDesde,selHasta)
        buscarListadoAsincrono(selDesde,selHasta)
    })
})