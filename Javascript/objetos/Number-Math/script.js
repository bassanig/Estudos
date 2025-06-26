const number = 20;

console.log(Number.isInteger(number));

console.log(Number.parseFloat('100'))
console.log(Number.parseInt('100.5', 10))


const number2 = 20.455;

console.log(number2.toFixed(2));

const valor = number.toLocaleString('US', {style: 'currency', currency: 'BRL'})

console.log(valor);


const valorEntre30e50 = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
const numeros = '4, 5, 20, 8, 9';

const numerosArray = numeros.split(', ');
const max = Math.max(...numerosArray);

console.log(max);




console.log(valorEntre30e50);

// Retorne um número aleatório
// entre 1050 e 2000


// Retorne o maior número da lista abaixo
const numeros3 = '4, 5, 20, 8, 9';


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPrecos(listaPrecos) {
    let soma = 0;
    listaPrecos.forEach((item) => {
        item = +item.toUpperCase().replace('R$', '').trim();
        item = +item.toFixed(2);
        soma += item;
    });
    return soma;
}


console.log(limparPrecos(listaPrecos))


