document.addEventListener('DOMContentLoaded', function () {
    const toggleViewButton = document.querySelector('#toggle-view-button');
    const personagensContainer = document.querySelector('#personagens');

    let isListView = false;

    toggleViewButton.addEventListener('click', function () {
        isListView = !isListView;

        if (isListView) {
            toggleViewButton.innerHTML = '<i class="fas fa-th"></i>'; 
            personagensContainer.classList.add('grid-view'); 
        } else {
            toggleViewButton.innerHTML = '<i class="fas fa-list"></i>'; 
            personagensContainer.classList.remove('grid-view'); 
        }
    });
});
