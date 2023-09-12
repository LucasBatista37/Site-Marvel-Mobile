document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeButton = document.querySelector('#dark-mode-button');
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');
    
    // Verificar o estado do modo escuro ao carregar a página
    const isDarkModeEnabled = localStorage.getItem('dark-mode-enabled') === 'true';
    
    // Definir o modo claro como padrão se não houver preferência anterior
    if (isDarkModeEnabled) {
        body.classList.add('dark-mode');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
    
    // Função para alternar entre os modos claro e escuro
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        const isDarkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode-enabled', isDarkModeEnabled);
        
        // Alternar ícones
        if (isDarkModeEnabled) {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    // Adicionar um ouvinte de eventos ao botão
    darkModeButton.addEventListener('click', toggleDarkMode);
});
