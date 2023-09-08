document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    
    menuButton.addEventListener('click', function () {
        if (menu.style.height === "100%") {
            menu.style.height = "0";
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
        } else {
            menu.style.height = "100%";
            menu.style.opacity = "1";
            menu.style.visibility = "visible";
        }
    });    
});

