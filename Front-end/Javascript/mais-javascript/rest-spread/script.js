const palavra =  'Guilherme Santos Bassani';
console.log(palavra.split());

function perimetroForma(lado = 1, totalLados = 4) {
  const argsArray = Array.from(arguments)
  console.log(argsArray);
  return lado * totalLados;
}

perimetroForma(4, 4);

function anuciarGanhadores(ganhador, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador);
  })
  return ganhador
}

console.log(anuciarGanhadores('Guilherme', 'Pedro', 'Maria'))

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  background = background;
  color = color;
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);

console.log(comidas);