function validarFormulario() {
    var nombre = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingresa tu email.");
        return false;
    }
}