const listTareasMap = new Map()
const listTareaSelected = new Set()

function agregarTarea(){
    var tareaIngresar = $('#in-tareas').val()
    var mapCorrel = listTareasMap.size
    listTareasMap.set(mapCorrel,{descripcion: tareaIngresar})

    dibujarLista()
}
/*
listTareasMap.set('A', { descripcion: 'Organizar el Equipo' })
listTareasMap.set('B', { descripcion: 'Finalizar el proceso x' })
listTareasMap.set('C', { descripcion: 'Crear Informe para mañana' })
listTareasMap.set('D', { descripcion: 'Hablar con los demás' })
*/
function dibujarLista(){
    $('#list-tareas').html('<li class="list-group-item list-group-item-secondary">Scrum List</li>')
    for(const tarea of listTareasMap){
        const [key, item] = tarea
        $('#list-tareas').append(`
            <li class="list-group-item d-flex justify-content-between">
              <label class="from-check-label stretched-link" for="check${key}">${item.descripcion}</label>
              <input class="form-check-input me-1 checkbox-tarea" type="checkbox" data-key="${key}" id="check${key}">
            </li>
            `)
    }
}

function dibujarFinalizadas(){
    if(listTareaSelected.size > 0){
        //$('#list-finalizadas').parent().parent().parent().removeClass('d-none')
        $('#list-finalizadas').parent().removeClass('d-none')
        $('#list-finalizadas').html('<li class="list-group-item list-group-item-secondary">Tareas Finalizadas</li>')
        for(const key of listTareaSelected){
            var terminada = listTareasMap.get(key).descripcion
            //<li class="list-group-item list-group-item-secondary">Tareas Finalizadas</li>
            $('#list-finalizadas').append(`
                <li class="list-group-item d-flex justify-content-between">
                  <label class="from-check-label stretched-link" for="trash${key}">${terminada}</label>
                  <button id="trash${key}" onclick="eliminarTerminada(${key})" class="icon-link btn bnt-outline-primary border-0"><img src="./assets/img/trash.svg"></button>
                </li>
                `)
        }
    }else{
        //$('#list-finalizadas').parent().parent().parent().addClass('d-none')
        $('#list-finalizadas').parent().addClass('d-none')
    }
}

function eliminarTerminada(id){
    listTareaSelected.delete(id)

    var idCheckTreminados = '#check'+id
    $(idCheckTreminados).closest('li').removeClass('tachado')
    $(idCheckTreminados).prop('checked', false)

    dibujarFinalizadas()
}

$(document).ready(function(){
    dibujarLista()

    $(document).on('click','.checkbox-tarea',function(){
        /* data-  > data('')
        data-qwerty > data('qwerty')   */
        const key = $(this).data('key')
        const select = $(this).prop('checked')
        var idLi = '#check'+key

        if(select){
            listTareaSelected.add(key)
            $(this).closest('li').addClass('tachado')
            //$(idLi).addClass('tachado')
        }else{
            listTareaSelected.delete(key)
            $(this).closest('li').removeClass('tachado')
        }
        dibujarFinalizadas()
    })

    $(document).on('keypress','#in-tareas',function(k){
        if(k.keyCode === 13){
            agregarTarea()
        }
    })
    $(document).on('click','#btn-tareas',function(){
        agregarTarea()
    })
})
