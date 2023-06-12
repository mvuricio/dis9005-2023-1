console.log("Hola solemne 2 tratame bien");
console.log("ancho: " + window.innerWidth);
// como cambiar el tamaño y color de los textos sin cambiar el css a continuacion
document.getElementById("personaje").style.color = "white";
document.getElementById("personaje").style.fontSize = "20px";
document.getElementById("personaje").style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
// importante agregar id dentro del texto que quiera editar para que sea encontrado dentro del js

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", registrarme);
function registrarme(event) {
    event.preventDefault();
    console.log("haz añadido tu personaje");
    document.getElementById("guardado").innerHTML = 
    "hola" + escribeloaqui.value;
    // intente hacer el form pero no funciona la respuesta despues de enviarlo
    // el formulario lo obtuve por mi compañera sofia graciasuwu
 }
