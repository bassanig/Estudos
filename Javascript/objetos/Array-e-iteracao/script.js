const carros = ['Fiat', 'Ford', 'Honda', 'Fusca'];

const novaArray = carros.map((item) => item)

carros.forEach((item) => {
  novaArray.push(item);
})

console.log(novaArray);


novaArray.pop()

console.log(novaArray);
console.log(carros);

const numeros = [4, 5, 6];
const novosNumeros = numeros.map((item) => item * 2).toString().split(",").slice(0, 2).join("");

console.log(novosNumeros);

const aulas = ["","Matematica", "Português", "Espanhol", ""];

const reduceAulas = aulas.reduce((acumulador, aula, index, array) => {
  acumulador[aula] = "";
  return acumulador;
}, {})


console.log(reduceAulas);

const every = aulas.every((aula) => {
  return !!aula;
})


console.log(every);

const maiorQue3 = numeros.every((num) => {
  return num > 3;
})


console.log(maiorQue3);


const indexMatematica = aulas.findIndex(item => item === 'Matematica')
const indexMatematica2 = aulas.indexOf("Matematica");

console.log(indexMatematica2);

console.log(indexMatematica);

const frutas = ["banana", null, undefined, "uva", 0, 'maça']

const frutasFilter = frutas.filter(fruta => fruta);

console.log(frutasFilter);




// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
const cursosArray = Array.from(cursos);

const objetosCursos = cursosArray.map((curso) => {
  const nomeCurso = curso.querySelector('h1').innerText;
  const subTitulo = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const tempoHoras = curso.querySelector('.horas').innerText;
  return {
    nomeCurso,
    subTitulo,
    aulas,
    tempoHoras,
  }
})

objetosCursos.forEach(item => console.log(item));


// Retorne uma lista com os
// números maiores que 100
const numeros2 = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros2.filter((num) => num > 100);

console.log(maiores100);



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const fazParte = instrumentos.some((i) => i.toLowerCase() === 'baixo')
console.log(fazParte);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const soma = compras.reduce((acumulador, item) => {
  const numero = +item.preco.trim().toUpperCase().replace("R$ ", "").replace(',', '.')
  return acumulador + numero
}, 0)


console.log(soma);
