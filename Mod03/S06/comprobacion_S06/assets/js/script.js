var bebestibles = []
var menus = []

function listBebidas(nombre,precio){
    this.nombre = nombre
    this.precio = precio
    this.selected = false
}

function listMenus(nombre,descripcion,precio,imagen){
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
    this.imagen = imagen
    this.selected = false
}

bebestibles.push(new listBebidas('Martini',2550))
bebestibles.push(new listBebidas('Cappuccino',1370))
bebestibles.push(new listBebidas('Latte',1350))
bebestibles.push(new listBebidas('Mojito',2290))

menus.push(new listMenus('Insalata di Riso','Lorem ipsum dolor sit amet, consectetur adipisicing el',6750,'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2017/05/insalata-di-riso-veg-ev-5012.jpg'))
menus.push(new listMenus('Insalata al Cipollotti','quis nostrud exercitation ullamco laboris nisi u',5990,'https://www.giallozafferano.it/images/6-622/Insalata-di-lenticchie-pomodori-e-cipollotti_780x520_wm.jpg'))
menus.push(new listMenus('Insalata Caprese','cillum dolore eu fugiat nulla pariatur. Excepteur sint',8250,'https://www.halfyourplate.ca/wp-content/uploads/2022/08/insalata-caprese.jpg'))


function llenarBebidas(){
    bebestibles.forEach((bebida,index) =>{
        $('#listHtmlBebidas').append(`
            <li class="list-group-item d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="beb${index}" onchange="selectBebida(${index},this)">
                <label class="form-check-label" for="beb${index}">${bebida.nombre}</label>
              </div>
              <div class="fw-bold">${bebida.precio.toLocaleString("es-cl",{style:"currency",currency:"CLP"})}</div>
            </li>
            `)
    })
}

function llenarPlatos(){
    menus.forEach((plato,index) =>{
        $('#listHtmlMenus').append(`
            <li class="list-group-item">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="plat${index}" onchange="selectPlato(${index},this)">
                <label class="form-check-label fw-bold" for="plat${index}">${plato.nombre}</label>
              </div>
              <div class="d-flex justify-content-between">
                <div>${plato.descripcion}</div>
                <img src=${plato.imagen} class="rounded-circle" style="width: 50px; height: 50px;">
              </div>
              <div class="fw-bold">${plato.precio.toLocaleString("es-cl",{style:"currency",currency:"CLP"})}</div>
            </li>
            `)
    })
}

function llenarCuenta(){
    var totalCuenta = 0
    $('#totalCuenta').html(totalCuenta.toLocaleString("es-cl",{style:"currency",currency:"CLP"}))
    /* agrego los tragos */
    $('#tableCuenta tbody').html('')
    bebestibles.forEach((trago,index) =>{
        if(trago.seleccionado){
            totalCuenta += trago.precio
            $('#tableCuenta tbody').append(`
                <tr>
                  <td>${trago.nombre}</td>
                  <td class="text-end">${trago.precio.toLocaleString("es-cl",{style:"currency",currency:"CLP"})}</td>
                </tr>
                `)
            $('#totalCuenta').html(totalCuenta.toLocaleString("es-cl",{style:"currency",currency:"CLP"}))
        }
    })
    /* agrego los platos */
    menus.forEach((plato,index) =>{
        if(plato.seleccionado){
            totalCuenta += plato.precio
            $('#tableCuenta tbody').append(`
                <tr>
                  <td>${plato.nombre}</td>
                  <td class="text-end">${plato.precio.toLocaleString("es-cl",{style:"currency",currency:"CLP"})}</td>
                </tr>
                `)
            $('#totalCuenta').html(totalCuenta.toLocaleString("es-cl",{style:"currency",currency:"CLP"}))
        }
    })
}

function selectBebida(indice,check){
    var itemSelected = $(check).prop('checked')
    bebestibles[indice].seleccionado = itemSelected

    llenarCuenta()
}

function selectPlato(indice,check){
    var itemSelected = $(check).prop('checked')
    menus[indice].seleccionado = itemSelected

    llenarCuenta()
}

$(document).ready(function(){
    llenarBebidas()
    llenarPlatos()
})
