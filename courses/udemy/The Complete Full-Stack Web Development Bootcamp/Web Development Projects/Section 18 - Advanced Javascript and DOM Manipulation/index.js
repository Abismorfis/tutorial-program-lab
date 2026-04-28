const drumButtons = document.querySelectorAll('.drum');

drumButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('I got clicked!');
    });
});