document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeButton = document.querySelector('#dark-mode-button');
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');
    
    const isDarkModeEnabled = localStorage.getItem('dark-mode-enabled') === 'true';
    
    if (isDarkModeEnabled) {
        body.classList.add('dark-mode');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
    
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        const isDarkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode-enabled', isDarkModeEnabled);
        
        if (isDarkModeEnabled) {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    darkModeButton.addEventListener('click', toggleDarkMode);
});
