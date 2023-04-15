/* jquery */
let url = 'https://studio-ghibli-films-api.herokuapp.com/api/'
/* lleno la lista de peliculas */
function llenarPeliculas(){
    fetch(url).then((respuesta) =>{
        return respuesta.json()
    }).then((data) => {
        //let peliculas = Object.entries(data)
        for(const movie in data){
            $('#idMovies').append(`
                <option value="${movie}">${movie}</option>
                `)
        }
    })
}

function detallePelicula(titulo){
    if(titulo != ''){
        let urlPelicula = url+titulo
        fetch(urlPelicula).then((pelicula) =>{
            return pelicula.json()
        }).then((dataPelicula) =>{
            $('#cardMovie').html("");
            $('#cardMovie').append(`
                <img id="imgMovie" src="${dataPelicula.poster}" class="card-img-top img-thumbnail">
                <div id="cardMovieBody" class="card-body">
                  <h3 class="card-title">${dataPelicula.title}</h3>
                  <p class="card-text">${dataPelicula.synopsis}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Título Romanizado:</strong> ${dataPelicula.hepburn}</li>
                    <li class="list-group-item"><strong>Año Estreno:</strong> ${dataPelicula.release}</li>
                    <li class="list-group-item"><strong>Director:</strong> ${dataPelicula.director}</li>
                    <li class="list-group-item"><a class="btn btn-primary">Más Información</a></li>
                </ul>
                `)
        })
    }
}


$(document).ready(function(){
    llenarPeliculas()

    $(document).on('change','#idMovies', function(){
        let nameMovie = $('option:selected').text();
        let idMovie = $('#idMovies').find(':selected').val();
        detallePelicula(nameMovie)

        /*let nameMovie = $('#idMovies').val()
        detallePelicula(nameMovie)*/
    })
})

/*
const getData = $('option:selected').text();
const id = $('#userTask').find(":selected").val();
*/
