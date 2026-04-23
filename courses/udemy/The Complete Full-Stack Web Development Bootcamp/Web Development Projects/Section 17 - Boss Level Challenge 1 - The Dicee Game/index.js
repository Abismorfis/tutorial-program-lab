const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

const qualifiedName = 'src';
const qualifiedvalue1 = `./images/dice${randomNumber1}.png`;
const qualifiedvalue2 = `./images/dice${randomNumber2}.png`;

const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');

image1.setAttribute(qualifiedName, qualifiedvalue1);
image2.setAttribute(qualifiedName, qualifiedvalue2);
