document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
    const content = document.getElementById('content') as HTMLParagraphElement;
  
    toggleButton.addEventListener('click', () => {
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        toggleButton.textContent = 'Hide Content';
        toggleButton.classList.remove('show');
      } else {
        content.classList.add('hidden');
        toggleButton.textContent = 'Show Content';
        toggleButton.classList.add('show');
      }
    });
  });
  