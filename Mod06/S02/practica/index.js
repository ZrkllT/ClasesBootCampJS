const moment = require('moment')

console.log('Práctica Node JS npm init')
console.log('Actualización Práctica Node JS')
console.log('Actualización Demon')


const fecha = moment().format('DD-MM-yyyy')
console.log('Fecha Hoy:',fecha)
console.log('7 Días desde Hoy:', moment().add(7,'days').format('DD-MM-yyyy'))

//subtract