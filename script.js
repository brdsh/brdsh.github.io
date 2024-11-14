// Obtenemos el botón
const btnSubir = document.getElementById('btnSubir');

// Función para mostrar el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnSubir.classList.add('show'); // Muestra el botón
    } else {
        btnSubir.classList.remove('show'); // Oculta el botón
    }
};

// Función para desplazar la página hacia arriba cuando el botón es clickeado
btnSubir.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
