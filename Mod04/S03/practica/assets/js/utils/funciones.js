const sumar = (n1, n2, mensaje="") => `${mensaje} ${n1 + n2}`
const restar = (n1, n2 = 10) => n1 - n2


//Funcion que recibe parámetros REST (Son parámetros de cantidad variable)
const calculoComisiones = (rut, nombre, ...comisiones) => {
    let total = 0;
    for (let index = 0; index < comisiones.length; index++) {
        total = total + comisiones[index]
    }
    console.log(`El colaborador ${nombre} portador el RUT ${rut} obtuvo $${total} pesos en total de comisiones`);
}

export default { sumar, restar, calculoComisiones }