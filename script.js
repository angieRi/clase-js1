function contactarse(){

    var nombre = document.solicitar_contacto.nombre.value
    var apellido = document.solicitar_contacto.apellido.value
    var dni = document.solicitar_contacto.dni.value
    var email = document.solicitar_contacto.email.value

    if(nombre===""){
        document.getElementById("nombre_error").innerHTML = "El campo nombre es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
    }
    if(apellido===""){
        document.getElementById("apellido_error").innerHTML = "El campo apellido es obligatorio"
    }else{
        document.getElementById("apellido_error").innerHTML = ""
    }
    if(dni===""){
        document.getElementById("dni_error").innerHTML = "El campo Dni es obligatorio"
    }else{
        document.getElementById("dni_error").innerHTML = ""
    }
    if(email===""){
        document.getElementById("email_error").innerHTML = "El campo Email es obligatorio"
    }else{
        document.getElementById("email_error").innerHTML = ""
    }
}
function valorTipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro_id").value

    switch(tipoSeguro){
        case "0": document.getElementById("mensajeValorTipoSeguro").innerHTML = "";
        break;
        case "1": document.getElementById("mensajeValorTipoSeguro").innerHTML = "El valor es: $ 500";
        break;
        case "2": document.getElementById("mensajeValorTipoSeguro").innerHTML = "El valor es: $ 1000";
        break;
        case "3": document.getElementById("mensajeValorTipoSeguro").innerHTML = "El valor es: $ 1500";
        break;
    }
}
valorTipoSeguro()