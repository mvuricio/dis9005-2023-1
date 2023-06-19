window.onload = function(){
    var imagen = document.getElementById("imagen");
    imagen.addEventListener('mouseover',cambiarImagen);
    imagen.addEventListener('mouseout',imagenIniciar);
   
    function cambiarImagen(){
        this.setAttribute('src','https://image.shutterstock.com/display_pic_with_logo/3016328/368581601/stock-photo-computer-key-showing-the-word-html-368581601.jpg');   
    }
   
    function imagenIniciar(){
        this.setAttribute('src',"https://pixabay.com/static/uploads/photo/2014/07/07/10/22/html-386093__180.jpg");
    }
   
   
}   
   