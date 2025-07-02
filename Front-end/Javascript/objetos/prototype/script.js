// function Pessoa() {
//     return 1 + 1;
//     this.nome = nome;
//     this.idade = idade;
// }


// console.log(Pessoa.prototype);







// const pessoa1 = new Pessoa('Guilherme Bassani', 15);

// pessoa1.beijarPessoa = () => {
//     return `Você beijou ${this.name}`
// }

// Pessoa.prototype.verOqueAconteceDepois = () => {
//     return 'Agr vai preso porque beijou um menor de idade kakakaka'
// }

// console.log(pessoa1.beijarPessoa);

// console.log();


// const brasil = 'Brasil';

// const cidade = new String('Rio');

// console.log(cidade);

// const rio = new String();


// const listaAnimais = ['Cachorro', 'Gato', 'Elefante']

// console.log(listaAnimais);



// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();


console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

function Pessoa(nomeAtribuido, sobreNomeAtribuido, idadeAtribuida) {
    this.nome = nomeAtribuido;
    this.sobrenome = sobreNomeAtribuido;
    this.idade = idadeAtribuida;
}


const pessoa5 = new Pessoa('Guilherme', 'Bassani', 23);

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
} 

console.log(pessoa5.nomeCompleto());
console.log(pessoa5);





const dadosHTML = document.getElementsByClassName('js');


console.log(Object.getOwnPropertyNames(HTMLAllCollection));
console.log(Object.getOwnPropertyNames(NodeList));
console.log(Object.getOwnPropertyNames(HTMLAllCollection));




