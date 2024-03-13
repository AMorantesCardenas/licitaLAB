document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const headerHeight = document.querySelector('header').offsetHeight;
    const conocenosTitle = document.getElementById('conocenoss');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop - headerHeight - 80; // Ajustar el margen adicional

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Agregar margen superior al título "Conócenos" después del desplazamiento
            conocenosTitle.style.marginTop = `${headerHeight}px`; // Ajustar el margen superior
        });
    });

    const inicioLink = document.querySelector('nav a[href="#inicio"]');
    if (inicioLink) {
        inicioLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Restablecer margen superior al título "Conócenos"
            conocenosTitle.style.marginTop = 0;
        });
    }
});