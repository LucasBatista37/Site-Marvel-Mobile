document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const fechar = document.querySelector('.fechar'); 

    menuButton.addEventListener('click', function () {
        if (menu.style.left === "0") {
            menu.style.left = "-100%";
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
        } else {
            menu.style.left = "0";
            menu.style.opacity = "1";
            menu.style.visibility = "visible";
        }

    document.body.style.overflow = 'hidden';
    });

    fechar.addEventListener('click', function () { 
        menu.style.left = "-100%";
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";

    document.body.style.overflow = 'auto';        
    });
});
