document.getElementById("logo").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    location.reload(); // Recargar la página
});