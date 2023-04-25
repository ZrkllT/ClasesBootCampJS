// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").value;
    //no debo poder ingresar letras
    document.getElementById('screen').value = screen + key;
}

// Ingresa el valor del botón cero.
function getZero() {
    var key = "0";
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;

}
//Agrega un decimal.
function addDecimal() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + "."
    // console.log(screen)
}
//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("screen").value = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value;
    // console.log("solve " + screen)
    // console.log("solve " + eval(screen))
    try {
        var screen = document.getElementById("screen").value = eval(screen);
    } catch (error) {
        document.getElementById("screen").value = 'Expresión Inválida'
    }

}

/*
$(document).ready(function(){
    $(document).on('keypress','#screen',function(k){
        console.log(k.code)
    })
})*//*
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
*/