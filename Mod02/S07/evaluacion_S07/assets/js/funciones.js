let nroUno, nroDos, opcion
let sigo

function validarNros(uno, dos){
    if(isNaN(uno)){
        alert('el primer dato ingresado no es un número')
        return false
    }
    if(isNaN(dos)){
        alert('el segundo dato ingresado no es número')
        return false
    }
    return true
}

function nroMayor(uno, dos){
    if(uno == dos){
        alert('Ambos números son iguales')
    }else if(uno < dos){
        alert(dos+' (2do) es mayor que '+uno+' (1ro)')
    }else if(uno > dos){
        alert(uno+' (1ro) es mayor que '+dos+' (2do)')
    }
}

function nroSumar(uno, dos){
    alert('La suma de los números '+uno+' y '+dos+' es: '+(uno+dos))
}
function nroRestar(uno, dos){
    alert('La resta de los números '+uno+' y '+dos+' es: '+(uno-dos))
}
function nroMultiplicar(uno, dos){
    alert('La multiplicación de los números '+uno+' y '+dos+' es: '+(uno*dos))
}
function nroDividir(uno, dos){
    if(dos == 0){
        alert('No se puede realizar una división por 0')
    }else {
        alert('La división de los números '+uno+' y '+dos+' es: '+(uno/dos))
    }
}
function nroMostrar(uno, dos){
    alert('Los números ingresados son: \n'
        +'Primer Número: '+uno+'\n'
        +'Segundo Número: '+dos )
}


function validarOpcion(opcion){
    if(Number(opcion) >= 1 && Number(opcion) < 7){
        nroUno = Number(prompt('Ingrese el primer número'))
        nroDos = Number(prompt('Ingrese el segundo número'))

        sigo = validarNros(nroUno, nroDos)
        if(sigo){
            if(opcion == 1 ){ nroMayor(nroUno, nroDos) }
            else if(opcion == 2){ nroSumar(nroUno, nroDos) }
            else if(opcion == 3){ nroRestar(nroUno, nroDos) }
            else if(opcion == 4){ nroMultiplicar(nroUno, nroDos) }
            else if(opcion == 5){ nroDividir(nroUno, nroDos) }
            else if(opcion == 6){ nroMostrar(nroUno, nroDos) }
        }
    }else if(Number(opcion) == 7){
        alert("Gracias por participar")
    }
    else{
        alert("Elección incorrecta. Adios!")
    }
}

opcion = prompt("Seleccione que desea hacer \n"
+ "1.- Calcular cual número es mayor\n"
+ "2.- Sumar \n"
+ "3.- Restar \n"
+ "4.- Multiplicar \n"
+ "5.- Dividir \n"
+ "6.- Mostrar los números ingresados \n"
+ "7.- Salir \n")

validarOpcion(opcion)

