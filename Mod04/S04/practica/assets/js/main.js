const vehiculo = {
    marca: 'Suzuki',
    modelo: 'Jimny',
    anio: 2014
}

/* opcion 1 */
let marca = vehiculo['marca']
let modelo = vehiculo.modelo
let anio = vehiculo.anio

console.warn('opcion antigua')
console.log('marca: ', marca )
console.log('modelo: ', modelo )
console.log('anio: ', anio )

let { marca: marca_v, modelo: modelo_v, anio: anio_v } = vehiculo
console.warn('opcion destructuring?')
console.log('marca: ', marca_v )
console.log('modelo: ', modelo_v )
console.log('anio: ', anio_v )

/* destructuring de arreglos */
const nombres = ['Alvaro','Daniela','Pamela','Jose']

/* opcion para arreglos 1 */
let nombre1 = nombres[0]
let nombre2 = nombres[1]
let nombre3 = nombres[2]
let nombre4 = nombres[3]

console.warn('mostrar arreglo')
console.log(nombre1)
console.log(nombre2)
console.log(nombre3)
console.log(nombre4)

let [primero,segundo,tercero,cuarto] = nombres
console.warn('mostrar arreglo destructuring')
console.log(primero)
console.log(segundo)
console.log(tercero)
console.log(cuarto)

let [,,tercero_vacio,] = nombres
console.log('solo tercero:', tercero_vacio)

let [seg, ...resto] = nombres
console.log(seg)
console.log(resto)

const otrosNombres = ['Carla','Marcela']
const arreglosUnidos = [...nombres, ...otrosNombres]
console.log('nombres: ', nombres)
console.log('otros nombres: ', otrosNombres)
console.log('arreglos unidos: ', arreglosUnidos)

/* esto copia el objeto y las referencias
crea un espejo del objeto */
const vehiculo2 = vehiculo
/* crea una copia del objeto */
const vehiulo3 = {...vehiculo}


/* clase map */
const personas = new Map()
personas.set('maria',{rut:'22222222-2', nombre: 'Maria Jose'})
personas.set('jose',{rut:'44444444-4', nombre: 'Jose Maria'})

console.log(personas.get('maria'))
personas.delete('jose')
console.log(personas)