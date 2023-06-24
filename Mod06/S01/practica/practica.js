const moment = require("moment")
const axios = require("axios")

console.log("Segunda Práctica Node Modificada");
console.log("Otro comentario2");

const fecha = moment().format('MMMM Do YYYY, h:mm:ss a');
const fecha2 = moment().format('YYYY-MM-DD H:mm:ss');
const fecha3 = moment().format('YYYY-MM-DD');
console.log(fecha);
console.log(fecha2);
console.log(fecha3);

console.log("Sumar Días", moment().add(60, 'days').format("YYYY-MM-DD"));
console.log("Restar Días", moment().subtract(7, 'days').format("YYYY-MM-DD"));


//Proceso Asíncrono
// const peticion1 = axios.get('https://swapi.dev/api/people/1')
// const peticion2 = axios.get('https://swapi.dev/api/people/2')

// peticion1.then(resp => {
//     console.log(resp.data.name);
// }).catch(error => {
//     console.log(error.message);
// });

// peticion2.then(resp => {
//     console.log(resp.data.name);
// }).catch(error => {
//     console.log(error.message);
// });
// console.log("Terminaron las peticiones");
//Proceso Síncrono


//Proceso síncrono
// (async() => {
//     const peticion1 = await axios.get('https://swapi.dev/api/people/1')
//     console.log(peticion1.data.name);

//     const peticion2 = await axios.get('https://swapi.dev/api/people/2')
//     console.log(peticion2.data.name);

//     const peticion3 = await axios.get('https://swapi.dev/api/people/3')
//     console.log(peticion3.data.name);

//     const peticion4 = await axios.get('https://swapi.dev/api/people/4')
//     console.log(peticion4.data.name);

//     const peticion5 = await axios.get('https://swapi.dev/api/people/5')
//     console.log(peticion5.data.name);

//     console.log("Terminaron las peticiones");
// })()


//Ejemplo de Promise.All
(async() => {
    const peticion1 = axios.get('https://swapi.dev/api/people/1')
    const peticion2 = axios.get('https://swapi.dev/api/people/2')
    const peticion3 = axios.get('https://swapi.dev/api/people/3')
    const peticion4 = axios.get('https://swapi.dev/api/people/4')
    const peticion5 = axios.get('https://swapi.dev/api/people/5')


    const resp = await Promise.all([peticion1, peticion2, peticion3, peticion4, peticion5])
    resp.forEach(element => {
        console.log(element.data.name)
    });
    console.log("Se terminaron las peticiones");
    
})()



// const peticion1 = axios.get('https://swapi.dev/api/people/1')
// const peticion2 = axios.get('https://swapi.dev/api/people/2')
// const peticion3 = axios.get('https://swapi.dev/api/people/3')
// const peticion4 = axios.get('https://swapi.dev/api/people/4')
// const peticion5 = axios.get('https://swapi.dev/api/people/5')


// Promise.all([peticion1, peticion2, peticion3, peticion4, peticion5]).then(resp => {
//     resp.forEach(element => {
//         console.log(element.data.name)
//     });
//     console.log("Terminaron las peticiones");
// })