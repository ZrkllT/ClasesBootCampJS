/* esto lo voy a usar despues *
function compararNros(){
  let nroUno = Number(document.getElementById("id1erNro").value);
  let nroDos = Number(document.getElementById("id2doNro").value);
  
  if(nroUno != 0 && nroDos != 0){
    if(nroUno == nroDos){
      return alert('Ambos Números son iguales')
    }else if(nroUno < nroDos){
      return alert(nroDos+' (2do nro) es MAYOR que '+nroUno+' (1er nro)');
    }else if(nroUno > nroDos){
      return alert(nroUno+' (1er nro) es MAYOR que '+nroDos+' (2do nro)');
    }
  }else{
    alert('Debe Ingresar Ambos Números')
  }
}
* esto lo voy a usar despues */
let nroUno, nroDos
nroUno = Number(prompt('Ingrese en primer Número:'))
nroDos = Number(prompt('Ingrese el segundo Número'))

if(isNaN(nroUno) || isNaN(nroDos)){
  alert('Uno o Ambos datos ingresados no son números')
}else{
  if(nroUno > nroDos){
    alert(nroUno+' es mayor que '+nroDos)
  }else if(nroUno < nroDos){
    alert(nroDos+' es mayor que '+nroUno)
  }else if(nroUno == nroDos){
    alert('ambos son iguales')
  }
}


/*
parseInt()
parse<asdasd>
*/