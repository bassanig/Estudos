const string = 'São Paulo';
const stringDiferente = new String('Rio de Janeiro');

console.log(stringDiferente);
console.log(stringDiferente.length);

console.log(string.length);

console.log(string.charAt(4));

console.log(string.includes('Paulo', 5));
console.log(string.includes('Paulo', 3));

console.log('-');

console.log(string.startsWith('S'));
console.log(string.startsWith('Sao'));
console.log(string.startsWith('São'));


console.log(stringDiferente.slice(0, 5));
console.log(stringDiferente.slice(-4));
//substring é paia

console.log(string.indexOf('na'));

console.log(string.padEnd(20, '-'));

console.log(string.repeat(5));

console.log(string.replace('Paulo', 'Carlos'));

console.log(string.split(' '));

console.log(string.split(' ').join(' '));


const stringEstragrada = 'GUiLhermE'

console.log(stringEstragrada.toLocaleLowerCase());


console.log(string.toLocaleLowerCase());



// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];


function somarValores(transacoes) {
    function somarTaxas(transacoes) {
        let somaTaxas = 0;
        transacoes.forEach((item) => {
            if(item.descricao.toLowerCase().includes('taxa')) {
                const itensSeparados = item.valor.split(" ");
                const numero = Number(itensSeparados[1]);
                somaTaxas += numero;
            }
        });

        return somaTaxas;
    }

    function somarPrecos(transacoes) {
        let somaPrecos = 0;
        transacoes.forEach((item) => {
            if(item.descricao.toLowerCase().includes('recebimento')) {
                const itensSeparados = item.valor.split(" ");
                const numero = Number(itensSeparados[1]);
                somaPrecos += numero;
            } 
        });

        return somaPrecos
    }

    return somarTaxas(transacoes) + somarPrecos(transacoes);
}

console.log(somarValores(transacoes));


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayAutomoveis = transportes.split(';');
console.log(arrayAutomoveis);


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;


const htmlSplitado = html.split('span').join('a');

console.log(htmlSplitado);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

const ultimoCaracter = frase.charAt(frase.length - 1)

console.log(ultimoCaracter);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let contadorTaxas = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim().includes('taxa');
    if(item) {
        contadorTaxas++;
    }
})

console.log(contadorTaxas);
