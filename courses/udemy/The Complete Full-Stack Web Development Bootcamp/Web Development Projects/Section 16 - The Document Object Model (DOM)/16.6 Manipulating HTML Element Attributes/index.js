document.querySelector('a');
// Output: <a href="https://www.google.com">Google</a>

document.querySelector('a').attributes;
// Output: NamedNodeMap {0: href, href: href, length: 1}

document.querySelector('a').getAttribute('href');
// Output: https://www.google.com

document.querySelector('a').setAttribute('href', 'https://www.bing.com');

document.querySelector('a').getAttribute('href');
// Output: https://www.bing.com

document.querySelector('button').addEventListener('click', checkboxEvent);

function checkboxEvent() {
    document.querySelector('input').click();
}