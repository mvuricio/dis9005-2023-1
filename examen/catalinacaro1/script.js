
let botoncito =document.getElementById("inicio");
console.log(botoncito);

botoncito.addEventListener("click", cambiarColor);
botoncito.addEventListener("mousedown", cambiarTamano);

// Referido a clases pasadas
function cambiarColor() {

    console.log ("hola")
    botoncito.style.backgroundColor= "green";
}
function cambiarTamano(){
    console.log ("otro")
}


console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "ENVIADO A " + nombre.value;
}

// referido a montoyamoraga

