// const array = ['Fiat', 'Uno', 'Ford', 'Gol', 'Fusca'];

// array.splice(1, 2, 'Ferrari');
// console.log(array);

// //copyWithIn

// const outraArray = ['Item1', 'Item2', 'Item3', 'Item4'];
// console.log(outraArray.fill('Banana'));


// const t1 = ['Moto'];
// const t2 = ['Carro'];

// console.log(t1.concat(t2));
// //ou
// const array2 = [].concat(t1, t2, 'Avião');


// console.log(array2.includes('Avião'));

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array


const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();

console.log(primeiraComida);
console.log(ultimaComida);

comidas.push('Arroz');
comidas.unshift('Batata', 'Peixe');

console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosAntigos = carros.slice();

console.log(carrosAntigos);

