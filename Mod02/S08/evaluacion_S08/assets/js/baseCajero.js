/* mod 02 S08 */
/* creo el objeto */
function cuentaBancaria(nombre,id,clave,saldo){
    this.nombre = nombre
    this.id = id
    this.clave = clave
    this.saldo = saldo
    this.girar = function(monto){
        if(this.saldo < Number(monto)){
            alert('No tienes Saldo suficiente para hacer este grio')
            return -1
        }else {
            this.saldo = Number(this.saldo) - Number(monto)
            return this.saldo
        }
    }
    this.depositar = function(monto){
        this.saldo = Number(this.saldo) + Number(monto)
        return this.saldo
    }
    this.verSaldo = function(){
        //alert(`tu saldo es ${this.saldo}`)
        return this.saldo
    }
}
/* creo la base de usuarios */
var personaje1 = new cuentaBancaria('Álvaro','varo','123456',150000);
var personaje2 = new cuentaBancaria('Daniela','dani','qwerty',200000);

var dbClientes = [], idElegido
dbClientes.push(personaje1)
dbClientes.push(personaje2)

/* opciones de banca */
opciones = 'Seleccione que desea hacer: \n'
+   '1.- Ver Saldo\n'
+   '2.- Realizar Giro\n'
+   '3.- Realizar Deposito\n'
+   '4.- Salir\n'

function validarNro(nro){
    if(isNaN(Number(nro))){
        return false
    }
    return true
}

function validarUsuario(user, pass){
    /* veo si esta el usuario */
    for(let i=0; i<dbClientes.length; i++){
        if(user == dbClientes[i].id){
            if(pass == dbClientes[i].clave){
                idElegido = i
                return true
            }
        }
    }
    return false
}
function bncGirar(cliente){
    let mGiro = Number(prompt('Tu Saldo actual es: '+dbClientes[cliente].verSaldo()+'\n'
                        +'Ingrese el monto a girar' ))
    let saldo = dbClientes[cliente].girar(mGiro)
    if(saldo != -1){
        alert('Giro realizado. Su nuevo saldo es: '+saldo)
    }
}
function bncDeposito(cliente){
    let mDeposito = Number(prompt('Tu Saldo actual es: '+dbClientes[cliente].verSaldo()+'\n'
                            +'Ingrese el monto a depositar' ))
    let saldo = dbClientes[cliente].depositar(mDeposito)
    alert('Deposito realizado. Su nuevo saldo es: '+saldo)
}

var userID, userPass, opcBanca
userID = prompt("Bienvendio a Banca en Línea \nIngrese su ID")
userPass = prompt('Ingrese su Password')

try{
    if(validarUsuario(userID,userPass)){
        alert('Bienvenido '+dbClientes[idElegido].nombre)
    }else{
        throw 'Error, Datos incorrectos'
    }
    do{
        opcBanca = prompt(opciones)
        if(validarNro(opcBanca)){
            if(opcBanca == 1){ alert('Tu Saldo es: '+dbClientes[idElegido].verSaldo()) }
            else if(opcBanca == 2){ bncGirar(idElegido) }
            else if(opcBanca == 3){ bncDeposito(idElegido) }
        }
        
    }while(opcBanca != 4)
    
}catch(error){
    alert(error)
}


/*
for(let i of dbClientes){
    console.log(i)
}
for(let i = 0; i <= dbClientes.length-1; i++){
    console.log(dbClientes[i])
}

console.log(dbClientes.length)


for(let clave in dbClientes){
    console.log(dbClientes)
}

console.log(dbClientes[1])
*/
/*
try{
    let nroUno = prompt('nro uno')
    let nroDos = prompt('nro dos')

    if(nroDos == 0){
        throw 'División entre 0'
    }
    alert(Number(nroUno) / Number(nroDos))
}catch (error){
    console.log(error)
    alert(error)
}
*/