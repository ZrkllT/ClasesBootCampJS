
$(document).ready(function(){
    let idDivText1 = $('#text1')
    let idDivText2 = $('#text2')
    let idDivCaja1 = $('#caja1 container')
    let idDivCaja2 = $('#caja2')
    let idDivCaja3 = $('#caja3')
    let idDivImg = $('#img')


    idDivText1.mouseover(function(){
        idDivText1.hide()
        idDivText2.show()
    })
    idDivText2.mouseout(function(){
        idDivText2.hide()
        idDivText1.show()
    })
    idDivCaja2.click(function(){
        idDivImg.css({ width: "100%" })
        idDivImg.css({ height: "100%" })
    })
    idDivImg.mouseout(function(){
        idDivImg.css({ width: "20%" })
        idDivImg.css({ height: "20%" })
    })
    idDivCaja3.dblclick(function(){
        idDivCaja3.css({ fontSize: 20 })
    })
})
