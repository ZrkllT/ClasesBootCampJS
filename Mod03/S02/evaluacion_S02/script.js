
/*
ºF -> ºC : (ºF - 32) / 1.8
ºC -> ºF : (ºC * 1.8) + 32
*/
var listTempsWeeks
function formula(tipo, temperatura){
    if(tipo === 1){ // ºC a ºF
        return (Number(temperatura) * 1.8) + 32
    }else if(tipo === 2){ //ºF a ºC
        return (Number(temperatura) - 32) / 1.8
    }
}

function convert(a,b){
    //console.log(b)

    listTempsWeeks = document.querySelectorAll('p.mb-0')
    console.log(listTempsWeeks)
    //console.log(listTempsWeeks.id)

    listParrafo = document.getElementById('sat')
    //console.log(listParrafo.value)

    for(const temp of listTempsWeeks){
        console.log(listTempsWeeks[temp].id)
    }

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
}
