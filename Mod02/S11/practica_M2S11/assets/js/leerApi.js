/* jquery */
let url = 'https://api.opendota.com/api/heroes'

function dotaHero(heroType){
    fetch(url).then((respuesta) =>{
        return respuesta.json()
    }).then((data) => {
        $('#tablaAPI tbody').html("");
        for(const item of data){
            $('#tablaAPI tbody').append(`
                <tr>
                    <td>${item.localized_name}</td>
                    <td>${item.primary_attr}</td>
                    <td>${item.roles}</td>
                </tr>
                `)
        }
    })
}

$(document).ready(function(){
    dotaHero(0);

    $(document).on("click","#btnBuscar", function(){
        let tipoHero = $("#tipoHero").val()
        console.log(tipoHero)
        dotaHero(tipoHero);
    })
})
