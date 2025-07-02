// const carro = {
//   rodas: 4,
//   marca: "Marca",
//   buzinar() {
//     return "Buzinou"
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   }
// }

// console.log(carro);

// const honda = Object.create(carro);

// function init(marca) {
//   this.marca = marca;
// }


const moto = {
  capacete: 4
}

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return this._rodas
    },
    set(valor) {
      this._rodas = valor * 4
    },
  }
})

moto.rodas = 4

console.log(moto.rodas);


console.log(Object.getOwnPropertyDescriptors(moto))

console.log(Object.keys(moto));


console.log(Object.getOwnPropertyNames(moto));

console.log(Object.is(moto, moto));


const carro = {
  marca: "honda",
  ano: '1993'
}

// Object.freeze(carro)
Object.seal(carro)
carro.marca = "Fiat"

carro.estilo = 'samba'

console.log(carro);

const numeros = [1, 2, 3, 4, 5]

console.log(Object.isSealed());


console.log(Object.prototype.toString.call(numeros));

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarObjeto(objeto) {
  return Object.prototype.toString.call(objeto)
}

console.log(verificarObjeto({}));


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4,
}

Object.defineProperties(quadrado, {
  lados: {
      writable: false,
      configurable: false,
  }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}


Object.freeze(configuracao)
console.log(Object.isFrozen(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const listaPropiedadesString = Object.getOwnPropertyNames(String.prototype);
console.log(listaPropiedadesString);

