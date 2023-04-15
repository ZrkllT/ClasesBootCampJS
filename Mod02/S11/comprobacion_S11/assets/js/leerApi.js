/* jquery */
let url = 'https://geek-jokes.sameerkumar.website/api'

function chiste(){
    fetch(url).then((respuesta) =>{
        return respuesta.json()
    }).then((data) => {
        $('#tablaAPI tbody').html("");
        console.log(data)
        $('#tablaAPI tbody').append(`
            <tr>
              <td>${data}</td>
            </tr>
            `)
    })
}

$(document).ready(function(){
    chiste();

    $(document).on("click","#btnBuscar", function(){
        chiste();
    })
})
