// function somar(a + b) {
//   return a + b;
// }



const somar1 = function() {

}

const somar2 = (a, b) => a + b;

const quadrado = n => n*n;

(function() {
  const instrumento = 'violao'
  console.log('feijao com farinha ' + instrumento);
} ())

// Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
  console.log('farinha com feijao????');
}())

// Como podemos utilizar
// a função abaixo






const button = document.querySelector('button');

// const active = (a) => callback(a);
// const callback = (a) => a.classList.add('active');
// div.addEventListener('click', () => {
//   active(div)
// });

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();