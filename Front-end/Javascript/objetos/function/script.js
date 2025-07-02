const objeto = {
  marca: 'honda',
  preco: 1999,
}

function descricaoCarro() {
  console.log(this.marca + " " + this.preco);
}

descricaoCarro.call(objeto)

const carros =  ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pera']

carros.forEach.call(frutas, (item) => console.log(item));

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

const  ul = new Dom('ul');

console.log(ul.element.innerText);

Dom.prototype.ativar = function(classe) {
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li')
}

// console.log(ul.ativar.call(li, 'ativo'));

Dom.prototype.ativar.call(li, 'ativo');

console.log(Array.prototype.pop.call(frutas))
console.log(frutas);

const li2 = document.querySelectorAll('li');
const li2Array = Array.from(li2);

console.log(li2);

const li2Filtrado = Array.prototype.filter.bind(li2, (item) => {
  return item.classList.contains('ativo')
})

const li2Filtrado2 = Array.from(li2).filter((item) => {
  return item.classList.contains('ativo')
})

console.log(li2Filtrado());

console.log(li2);

const numeros3 =  [1, 2, 3 ,4 ,5 ,66 ,7, 99]
const maior = Math.max.apply(null, numeros3)
console.log(maior);

const $ = document.querySelectorAll.bind(document);

console.log($('ul'));

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
const quantidadeCaracteres = Array.prototype.reduce.call(paragrafos, (acumalador, paragrafo) => {
      return acumalador + paragrafo.innerText.length
}, 0)
console.log(quantidadeCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElement(tag, classe, conteudo) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerText = conteudo;
  return element;
}

const novoP = criarElement('p', 'paragrafo', 'eu sou bom em javascript');
console.log(novoP.innerText);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novaFuncao = criarElement.bind(null, 'h1');

const h1 = novaFuncao('outro', 'bind');

console.log(h1);