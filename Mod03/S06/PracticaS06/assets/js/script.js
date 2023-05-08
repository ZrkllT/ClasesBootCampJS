var colores = []
var nombColor
var tableColores = document.querySelector('#tableColor tbody')
const inputKey = document.querySelector('#idColorName')
inputKey.addEventListener('keypress', inputK)

function inputK(k){
    if(k.code === 'Enter' || k.code === 'NumpadEnter'){
        addColor()
    }
}

function resetColor(){
    tableColores.innerHTML = ''
    colores.forEach((nombColor,index) =>{
        tableColores.innerHTML += `
          <tr>
            <td>${nombColor}</td>
            <td style="background: ${nombColor}"></td>
            <td><button onclick=delColor(${index}) type="button" class="btn btn-sm btn-danger">Eliminar Color</button></td>
        `
    })
}

function delColor(c){
    if(confirm(`¿Esa seguro de eliminar el color ${colores[c]}?`)){
        var eliminar = colores.splice(c,1)
        alert(`Se ha eliminado correctamente`)
        resetColor()
    }
}

function addColor(){
    nombColor = document.getElementById('idColorName').value.toLowerCase()

    if(!colores.includes(nombColor)){
        document.getElementById('idColorName').value = ''
        colores.push(nombColor)
        dibColor(nombColor,colores.indexOf(nombColor))
    }else{
        document.getElementById('idColorName').value = ''
        alert('el color ya esta ingresado')
    }
}

function dibColor(nombColor,index){
    tableColores.innerHTML += `
      <tr>
        <td>${nombColor}</td>
        <td style="background: ${nombColor}"></td>
        <td><button onclick=delColor(${index}) type="button" class="btn btn-sm btn-danger">Eliminar Color</button></td>
    `
}

