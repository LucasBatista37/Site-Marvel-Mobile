document.addEventListener('DOMContentLoaded', function () {
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        
        const isDarkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode-enabled', isDarkModeEnabled);
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const isDarkModeEnabled = localStorage.getItem('dark-mode-enabled') === 'true';
    
        if (isDarkModeEnabled) {
            body.classList.add('dark-mode');
        }
    });
    
    const darkModeButton = document.querySelector('#dark-mode-button');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }
    
    
});
