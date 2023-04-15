$(document).ready(function(){
    
    $(document).on("click", "#link-comuniquemonos", function() {
        $("#comuniquemonos").removeClass("d-none")
        $("#galeria").addClass("d-none")
        $("#reserva").addClass("d-none")
    })

    $(document).on("click", "#link-reserva", function() {
        $("#comuniquemonos").addClass("d-none")
        $("#galeria").addClass("d-none")
        $("#reserva").removeClass("d-none")
    })

    $(document).on('click','#link-galeria',function(){
        $("#comuniquemonos").addClass("d-none")
        $("#reserva").addClass("d-none")
        $("#galeria").removeClass("d-none")
    })
})