function completarCero(o){
    if(o < 10){
        o = '0' + o
    }
    return o
}

var alertaEncabezado = document.querySelector('#idHeader')

function fechaLimite(){
    fechaHoy = new Date()

    diaHoy = fechaHoy.getDate()
    diaHoy = completarCero(diaHoy)
    mesHoy = fechaHoy.getMonth() + 1
    mesHoy = completarCero(mesHoy)
    annoHoy = fechaHoy.getFullYear()
    fechaCompleta = diaHoy +'/'+ mesHoy +'/'+ annoHoy

    alertaEncabezado.innerHTML +=`
      <h1 class="text-center">¡Apresúrese!</h1>
      <H2 class="text-center">El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</h2>
      <h3 class="text-center">${diaHoy} / ${mesHoy}  / ${annoHoy}</h3>
    `
}

fechaLimite()
