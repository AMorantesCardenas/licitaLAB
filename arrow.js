document.addEventListener("DOMContentLoaded", function() {
    var arrowDown = document.querySelector(".arrow-down");
    var conocenosSection = document.getElementById("conocenos");

    arrowDown.addEventListener("click", function() {
        scrollToElement(conocenosSection);
    });

    function scrollToElement(element) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var offset = element.offsetTop - headerHeight - 80; // Ajustar el margen adicional
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
});
