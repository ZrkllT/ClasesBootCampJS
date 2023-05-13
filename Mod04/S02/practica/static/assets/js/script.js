/*
class Vehiculo{
    constructor(marca,modelo,anio){
        this.marca = marca
        this.modelo = modelo
        this.anio = anio

        console.log('upd vehiculo')
    }
}


const equipo1 = new Vehiculo('suzuki','jimny',2016)
console.log(equipo1)


class SUV extends Vehiculo{
    constructor(marca,modelo,anio,color,transmision){
        super(marca,modelo,anio)
        this.color = color
        this.transmision = transmision
    }
}

const jimny1 = new SUV('suzuki','jimny',2018,'blanco','manual5')
console.log(jimny1)


console.log(jimny1['marca'])
*/

import { Vehiculo } from './clases/Vehiculo.js'

const jimny = new Vehiculo('Suzuki','Jimny',2013)
console.log(jimny)