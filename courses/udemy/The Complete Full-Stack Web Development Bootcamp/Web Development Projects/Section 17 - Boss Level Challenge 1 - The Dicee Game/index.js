const randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

const qualifiedName = 'src';
const qualifiedvalue = `./images/dice${randomNumber1}.png`;

const image1 = document.querySelector('.img1');

image1.setAttribute(qualifiedName, qualifiedvalue);
