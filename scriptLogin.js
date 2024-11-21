document.getElementById("btn__registrarse").addEventListener  ("click", registro);

document.getElementById("btn__sesion").addEventListener  ("click", iniciarSesion);


var contenedor_login_registro = document.querySelector(".contenedor-login-registro");
var formulario_login = document.querySelector(".formulario-login");
var formulario_registro= document.querySelector(".formulario-registro");
var caja_trasera_login = document.querySelector(".caja-trasera-login");
var caja_trasera_regirtro= document.querySelector(".caja-trasera-regirtro");



function iniciarSesion(){


    formulario_registro.style.display ="none";
    contenedor_login_registro.style.left ="10px";
    formulario_login.style.display = "block";
    caja_trasera_regirtro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";


    
}

function registro(){
 
    formulario_registro.style.display ="block";
    contenedor_login_registro.style.left ="410px";
    formulario_login.style.display = "none";
    caja_trasera_regirtro.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";

 
}
