
function sumar(nro1, nro2){
    return nro1 + nro2
}

/* funcion anonima */
const sumarAnonima = function(nro1, nro2){
    return nro1 + nro2
}

/* funcion flecha */
const sumarFlecha1 = (nro1, nro2) =>{
    return nro1 + nro2
}

const sumarFlecha2 = (nro1, nro2) => nro1 + nro2

const saludar = nombre => console.log(`Hola ${nombre}`)
saludar('Álvaro')

const mostrarMensaje = () => console.log('Mensaje función sin parametros')
mostrarMensaje()

