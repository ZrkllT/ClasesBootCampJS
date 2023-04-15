/*
• Al pasar el mouse por el primer <div> “text1” se mostrará el segundo y al salir de él se ocultará nuevamente.
• Al hacer clic en el <div> id “caja2” la imagen deberá agrandarse un 100% y al salir de ella, volver a su tamaño inicial.
• Con el tercer <div> la letra se agrandará al hacer doble clic en él.
*/


//const idDivText1, idDivText2, idDivCaja1, idDivCaja2, idDivCaja3, idDivImg
/* obtengo los id de los objetos */
const idDivText1 = document.getElementById('text1')
const idDivText2 = document.getElementById('text2')
const idDivCaja1 = document.getElementsByClassName('caja1 container')
const idDivCaja2 = document.getElementById('caja2')
const idDivCaja3 = document.getElementById('caja3')
const idDivImg = document.getElementById('img')

function txt1MouseIn(){
    /* muestro el parrafo 2*/
    idDivText1.style.display = "none"
    idDivText2.style.display = "block"    
}
function txt2MouseOut(){
    idDivText2.style.display = "none"
    idDivText1.style.display = "block"
}
function imgGrande(){
    idDivImg.style.width = "100%"
    idDivImg.style.height = "100%"
}
function imgNormal(){
    idDivImg.style.width = "20%"
    idDivImg.style.height = "20%"
}
function txt3Grande(){
    idDivCaja3.style = "font-size: larger"
}


idDivText1.onmouseover = txt1MouseIn
idDivText2.onmouseout = txt2MouseOut
idDivCaja2.onclick = imgGrande
idDivImg.onmouseout = imgNormal
idDivCaja3.ondblclick = txt3Grande

/*
idDivImg.addEventListener('click', function(){
    alert('persionar click')
})
document.getElementById("id1erNro").value
*/