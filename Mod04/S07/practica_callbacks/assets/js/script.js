var fechaHoy = new Date()

/* llamadas sincronas */
const mensaje_1 = () => console.log('llamado 1')
const mensaje_2 = () => console.log('llamado 2')
const mensaje_3 = () => console.log('llamado 3')

//setTimeout(() =>{mensaje_1()}, 8000);
//setTimeout(() =>{mensaje_2()}, 1000);
//setTimeout(() =>{mensaje_3()}, 5000);
//setTimeout(mensaje_1,9000)
//setTimeout(mensaje_2,3000)
//setTimeout(mensaje_3,6000)

/* promesas */
const promesa_1 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Promesa 1 (6s)')
        }, 6000)
    })
}
const promesa_2 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Promesa 2 (12s)')
        }, 12000)
    })
}
const promesa_3 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Promesa 3 (1s)')
        }, 1000)
    })
}

/* proceso sincrono *
//salida es: prom2 - prom3 - prom1
promesa_1().then((respuesta) =>{
    console.log('then promesa 1: ', respuesta)
})

promesa_2().then((respuesta) =>{
    console.log('then promesa 2: ', respuesta)
})

promesa_3().then((respuesta) =>{
    console.log('then promesa 3: ', respuesta)
})
*/

/* proceso asincrono *
const procesoSincrono = async() =>{
    const resPromesa_1 = await promesa_1()
    console.log(resPromesa_1)
    const resPromesa_2 = await promesa_2()
    console.log(resPromesa_2)
    const resPromesa_3 = await promesa_3()
    console.log(resPromesa_3)

    return {resPromesa_1, resPromesa_2, resPromesa_3}
}

var promesassincro = procesoSincrono()
console.log('promesas sincro: ', promesassincro)
promesassincro.then(respuesta =>{
    console.log(respuesta)
})
*/

/* proceso asincrono pomise all */
var resPromesa_1 = promesa_1() // 6 segundos
var resPromesa_2 = promesa_2() // 12 segundos
var resPromesa_3 = promesa_3() // 1 segundos

Promise.all([resPromesa_1,resPromesa_2,resPromesa_3]).then(respuesta =>{
    console.log(respuesta)
})
