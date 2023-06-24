const yargs = require('yargs')
const { v4:uuid } = require('uuid')
const fs = require('fs')
const { validate } = require("rut.js")

yargs
    .command('crear', 'Comando para crear un registro de persona',
        {
            rut: { 
                alias: 'r',
                describe: 'Rut de la persona a registrar',
                type: 'string',
                demandedOptions: true
            },
            nombre: {
                alias: 'n',
                describe: 'Nombre de la persona a registrar',
                type: 'string',
                demandedOptions: true
            },
            apellido: {
                alias: 'a',
                describe: 'Apellido de la persona a registrar',
                type: 'string',
                demandedOptions: true
            }
        },
        ({rut, nombre, apellido}) =>{
            if(!validate(rut)){
                return console.log('El rut ingresado no es valido')
            }
            const data = fs.readFileSync('src/files/personas.txt', 'utf8')
            const arreglo = JSON.parse(data)
            const indice = arreglo.findIndex(elemento => elemento.rut == rut )
            if(indice !== -1){
                return console.log('El rut ingresado ya existe en el archivo')
            }
            arreglo.push({
                id: uuid().slice(0,8),
                rut: rut,
                nombre: nombre,
                apellido: apellido
            })
            const registro = JSON.stringify(arreglo)
            fs.writeFileSync('src/files/personas.txt',registro,'utf8')
        })

    .command('listar', 'Comando para listar personas',{},
        () =>{
            const data = fs.readFileSync('src/files/personas.txt','utf8')
            const resultado = JSON.parse(data)
            console.table(resultado)
        })

    .command('actualizar', 'Comando para actualizar un registro',
        {
            id: {
                alias: 'i',
                describe: 'Actualiza el registro de una persona usando el ID',
                type: 'string',
                demandedOptions: true
            },
            rut: { 
                alias: 'r',
                describe: 'Acutaliza Rut de la persona a registrar',
                type: 'string',
                demandedOptions: false
            },
            nombre: {
                alias: 'n',
                describe: 'Acutaliza Nombre de la persona a registrar',
                type: 'string',
                demandedOptions: false
            },
            apellido: {
                alias: 'a',
                describe: 'Acutaliza Apellido de la persona a registrar',
                type: 'string',
                demandedOptions: false
            }
        },
        ({id, rut, nombre, apellido}) =>{

            if(rut == undefined && nombre == undefined && apellido == undefined){
                return console.log('Para Actualizar debe indicar al menos 1 parametro (rut, nombre, apellido)')
            }
            if(!validate(rut)){
                return console.log('El rut ingresado no es valido')
            }
            const data = fs.readFileSync('src/files/personas.txt','utf8')
            const arreglo = JSON.parse(data)
            const updindice = arreglo.findIndex(elemento => elemento.rut == rut )
            if(updindice !== -1){
                return console.log('El rut ingresado ya existe en el archivo')
            }
            const indice = arreglo.findIndex(elemento => elemento.id == id )
            arreglo[indice] = { 
                ...arreglo[indice],
                rut: rut || arreglo[indice].rut,
                nombre: nombre || arreglo[indice].nombre,
                apellido: apellido || arreglo[indice].apellido
            }
            /*
            if(rut !== undefined){
                arreglo[indice].rut = rut
            }
            if(nombre !== undefined){
                arreglo[indice].nombre = nombre
            }
            if(apellido !== undefined){
                arreglo[indice].apellido = apellido
            }
            */

            const registro = JSON.stringify(arreglo)
            fs.writeFileSync('src/files/personas.txt',registro,'utf8')
            console.log('Se actualizó el registro satisfactoriamente')
            console.table(arreglo[indice])
        })

    .command('eliminar', 'Comando para borrar registro de persona',
        {
            id: {
                alias: 'i',
                describe: 'Elimina el registro de una persona usando el ID',
                type: 'string',
                demandedOptions: true
            }
        },
        ({id}) =>{
            const data = fs.readFileSync('src/files/personas.txt','utf8')
            const arreglo = JSON.parse(data)
            const indice = arreglo.findIndex(elemento => elemento.id == id )
            if(indice == -1){
                return console.log('El ID no existe. No se pudo eliminar')
            }else{
                const eliminado = arreglo.splice(indice,1)
                const registro = JSON.stringify(arreglo)
                fs.writeFileSync('src/files/personas.txt',registro,'utf8')
                console.log('Se eliminò el registro satisfactoriamente')
                console.table(eliminado)
            }
        })

    .help()
    .argv

/*
console.log(uuid().slice(0,8))
*/