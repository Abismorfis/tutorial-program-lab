const innerHTML = document.querySelector('h1').innerHTML;
console.log(innerHTML);
// Output: <strong>Hello</strong>

const textContent = document.querySelector('h1').textContent;
console.log(textContent);
// Output: Hello

document.querySelector('h1').innerHTML = '<em>Good Bye</em>';