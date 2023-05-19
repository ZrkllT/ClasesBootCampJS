import funciones from '../utils/funciones.js'
const { peticiones } = funciones

var token = '10225832066284806'
var url = `https://superheroapi.com/api.php/${token}/search/`

async function buscarHero(name){
    var urlBusqueda = url+name

    /* opcion 1 para esperar la peticion */
    //var respuesta = peticiones(urlBusqueda)
    //respuesta.then((data) => console.log('opcion 1',data))

    /* opcion 2 para esparar la peticion */
    try{
        var respuesta2 = await peticiones(urlBusqueda)
    }catch(error){
        alert('error en la busqueda')
        return
    }
    console.log(respuesta2)

    if(respuesta2.response == 'error'){
        $('#listHero').html('')
        $('#alertErrorHero').html(respuesta2.error)
        $('#alertErrorHero').removeClass('d-none')
    }else{
        $('#alertErrorHero').addClass('d-none')
        dibujarHero(respuesta2)
    }
}

function dibujarHero(arrHero){
    $('#listHero').html('')
    arrHero.results.forEach(element =>{
        let raza = element.appearance.race === 'null' ? 'No Race' : element.appearance.race
        let [,peso] = element.appearance.weight
        let [,altura] = element.appearance.height
        $('#listHero').append(`
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
    $('#formSuperHero').submit(function(event){
        event.preventDefault()
        let nameSuperHero = $('#inHeroName').val()
        buscarHero(nameSuperHero)
    })
})


//<p class="card-text">${element.work.occupation}</p>