/***
when the user scrolls, we show the button "Go to Menu"
***/

const toTopButton = document.getElementById("toTopButton");

window.addEventListener('scroll', function() {
    if (pageYOffset < 70) {
        toTopButton.className = "unShow";
    } else {
        toTopButton.className = "show";
    }
});
