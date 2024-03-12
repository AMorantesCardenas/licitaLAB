document.addEventListener("DOMContentLoaded", function() {
    var arrowDown = document.querySelector(".arrow-down");
    var conocenosSection = document.getElementById("conocenos");

    arrowDown.addEventListener("click", function() {
        scrollToElement(conocenosSection);
    });

    function scrollToElement(element) {
        var offset = element.offsetTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
});
