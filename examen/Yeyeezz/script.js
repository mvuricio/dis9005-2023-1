let fotos = 1;
mostrar (fotos);

function masFotos(n) {
    mostrar (fotos += n)
}

function fotoActual(n) {
    mostrar (fotos += n)
}

function mostrar(n) {
    let i;
    let posicion = document.getElementsByClassName("deslizar");
    let signos = document.getElementsByClassName("puntos");
    if (n > tamaño) {fotos = 1}
    if (n < 1) {fotos = tamaño}
}