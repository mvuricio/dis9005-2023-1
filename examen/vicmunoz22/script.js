console.log("Bienvenidos a esta p&aacute;gina");
console.log("ancho: " + window.innerWidth);
const d = new Date("2022-03-25");                             
document.getElementById("fecha").innerHTML = d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "red";
    document.getElementById("fecha").style.backgroundColor = "yellow";        
  }
  console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);
martha.addEventListener("mousedown", cambiarTamano);

function cambiarColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}
function cambiarTamano() {
  console.log("otro");
}
function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }
  function myFunction() {
    alert("The form was submitted");
  }
  document.getElementById("myForm").onsubmit = function() {myFunction()};

function myFunction() {
  alert("The form was submitted");
}
console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", Ingresar);

function Ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "hola tu " + Nombre.value;
}

// inicio cita web https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// fin cita web https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow