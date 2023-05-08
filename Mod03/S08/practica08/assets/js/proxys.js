function crearEquipo(marca,modelo,ram,disco,tipo){
    this.marca = marca
    this.modelo = modelo
    this.ram = ram
    this.disco = disco
    this.tipo = tipo
}

var equipo1 = new crearEquipo('IBM','R500',8,240,'HDD')
var equipo2 = new crearEquipo('Asus','A15',32,500,'ssd')


var proxyEquipo1 = new Proxy(equipo1, {
    get: function(objeto,propiedad){
        /*if(typeof(objeto[propiedad]) == 'string'){
            return objeto[propiedad].toUpperCase()
        }else{
            return objeto[propiedad]
        }*/
        
        return typeof(objeto[propiedad]) == 'string'? objeto[propiedad].toUpperCase() : objeto[propiedad]
    },

    set: function(objeto,propiedad,nuevo_valor){
        switch(propiedad){
            case 'ram':
                if(nuevo_valor != 8 && nuevo_valor != 16 && nuevo_valor != 32){
                    throw 'Valor de RAM debe ser 8, 16 o 32'
                }
            break;

            case 'disco':
                if(nuevo_valor != 120 && nuevo_valor != 240 && nuevo_valor != 500){
                    throw 'Valor de disco debe ser 12, 240 o 500'
                }
            break;

            case 'tipo':
                if(nuevo_valor.toUpperCase() != 'SSD' && nuevo_valor.toUpperCase() != 'HDD'){
                    throw 'Los tipos de disco deben ser HDD o SSD'
                }
            break;

            default:
            break;
        }
        objeto[propiedad] = nuevo_valor
    }
})

try{
    proxyEquipo1.ram = 8
    proxyEquipo1.disco = 120
    proxyEquipo1.tipo = 'ssd'
    console.log(proxyEquipo1.tipo)
    console.log('proxy has - disco', Reflect.has(proxyEquipo1, 'disco'))
    console.log('proxy has - procesador', Reflect.has(proxyEquipo1, 'procesador'))

    console.log('proxy get - disco', Reflect.get(proxyEquipo1, 'disco'))
    console.log('proxy get - procesador', Reflect.get(proxyEquipo1, 'procesador'))

    console.log('proxy ownKeys', Reflect.ownKeys(proxyEquipo1))
}catch(error){
    console.log(error)
}