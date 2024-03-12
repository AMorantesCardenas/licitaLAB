// Este código es opcional, pero puede ayudar a hacer el botón flotante más interactivo

window.addEventListener("scroll", function() {
    var whatsappFloat = document.querySelector('.whatsapp-float');
    whatsappFloat.classList.toggle('active', window.scrollY > 200);
  });
  