
/*
ºF -> ºC : (ºF - 32) / 1.8
ºC -> ºF : (ºC * 1.8) + 32
*/
var listTempsWeeks
function formula(tipo, temperatura){
    if(tipo){ // ºC a ºF
        return (Number(temperatura) * 1.8) + 32
    }else{ //ºF a ºC
        return (Number(temperatura) - 32) / 1.8
    }
}

function convert(quien,item){

    var tipoTemp = $(item).prop('checked')
    console.log(tipoTemp)
    /*
    if(tipoTemp){
        console.log('celcius a farenheit')
    }else{console.log('farenheit a celcius')}
    */

    listTempsWeeks = document.querySelectorAll('p.mb-0')
    listTempsWeeks.forEach((item,index) =>{
        var tempDay = document.getElementById(item.id)
    })
}

/*
$(check).prop('checked')

for(const temp of listTempsWeeks){
    console.log(listTempsWeeks[temp].id)
}
*/
/*
for(const temp of listTempsWeeks){
    var idTemp = console.log(temp['id'])
    console.log(idTemp)
    var tempInicial = document.getElementById(idTemp)
    console.log(tempInicial)

    //var tempInicial = document.getElementById(temp['id']).value
    //console.log(tempInicial)


    //console.log(Number(temp['value']))
    //var tempTransformada = formula(1, Number(temp['value']))
    //console.log(tempTransformada)
    //document.getElementById(temp['id']).innerHTML = tempTransformada
}
*//*
var screen = document.getElementById("screen").value;
document.getElementById("screen").value = screen + "."
*/