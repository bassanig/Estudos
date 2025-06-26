const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

console.log(h1.innerText);
console.log(animaisLista.innerHTML);



// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais




const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);

const copy = document.querySelector('.copy');




const primeiroDD = primeiroDt.nextElementSibling;

const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

const primeiroDt = document.querySelector('.faq dl dt');



faq.innerHTML = animais.innerHTML;

copy.appendChild(menuClone)