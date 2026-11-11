document.querySelector('h1').classList.add('huge');

document.querySelector('button').addEventListener('click', checkboxEvent);

function checkboxEvent() {
    document.querySelector('input').click();
}