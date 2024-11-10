document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var content = document.getElementById('content');
    toggleButton.addEventListener('click', function () {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Hide Content';
            toggleButton.classList.remove('show');
        }
        else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Show Content';
            toggleButton.classList.add('show');
        }
    });
});
