import funciones from "./utils/funciones.js";

const { sumar, restar, calculoComisiones } = funciones

// Opción1
// console.log("Sumar", funciones.sumar(8,5));
// console.log("Restar", funciones.restar(5,8));

// Opción2
// console.log(sumar(8,5,"El resultado de la suma es el siguiente: "));
// console.log("Restar", restar(5, 2));

// console.log("Restar con más parámetros", restar(5, 2, 5, 1, 8));



// Llamado de función con parámetros REST
// calculoComisiones("12345678-5","Juan", 20_000, 15_000, 18_000, 21_000)





let persona = {
    rut: "12345678-5",
    nombre: "Pablo",
    apellido: "Marmol",
    direccion: {
        region: 'BioBio',
        comuna: 'Concepción'
    }
}

let persona2 = {
    rut: "12345699-5",
    nombre: "Pedro",
    apellido: "Picapiedra",
    direccion: {
        region: 'Los lagos',
        comuna: 'Osorno'
    }
}


const listado = [ persona, persona2]
console.log(listado);
console.log(persona);

console.warn("Iterando valores***************************");
// Ejemplo iterando los valores del objeto
for (let dato of Object.values(persona)) {
    console.log(dato);
}


console.warn("Iterando llaves***************************");
// Ejemplo iterando las llaves del objeto
for (let dato of Object.keys(persona)) {
    console.log(dato);
}


console.warn("Iterando llaves y valores***************************");
// Ejemplo iterando las llaves del objeto
for (let dato of Object.entries(persona)) {
    console.log(dato);
}

console.warn("Iterando arreglos para obtener el valor de cada item***************************");
for (const itemPersona of listado) {
    console.log(itemPersona);
}

console.warn("Iterando arreglos para obtener cada índice***************************");
for (const indice in listado) {
    console.log(indice);
}




