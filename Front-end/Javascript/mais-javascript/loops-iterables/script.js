const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));

console.log(frutas);

const gui = {
  nome: 'Gui',
  idade: 28,
}

for(const i in gui) {
  console.log(i, gui[i]);
}