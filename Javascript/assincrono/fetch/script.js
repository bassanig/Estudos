// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep.then(resolucao => {
//     console.log(resolucao.type);
//     const response = resolucao.clone();
//     const r2 = resolucao.clone();
//     resolucao.json().then(r => {
//         console.log(r);   
//     })
//     r2.text().then((body) => {
//         console.log(body);
//         const conteudo = document.querySelector('.conteudo');
//     })

//     response.headers.forEach(console.log)
// })

// const  doc = fetch('./doc.txt');

// doc.then(resolucao => {
//     resolucao.text()
//     .then(body => {
//         console.log(body);
//     })
// })

// const sobre = fetch('./sobre.html');

// sobre.then(r => {
//     r.text()
//     .then(r => {
//         div.innerHTML = r;
//         const titulo = div.querySelector('h1');
//         console.log(titulo);
        
//     });
// });

// const div = document.createElement('div');


// const imagem = fetch('./eu.jpg');

// imagem.then(r => {
//     r.blob()
//     .then(r => { 
//         const blobURL = URL.createObjectURL(r);
//         console.log(blobURL);
//         const imagem = document.querySelector('img');
//         imagem.src = blobURL;
//         console.log();
        
//     });    
// });


// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const input = document.querySelector('input');
const response = document.querySelector('p');

input.addEventListener('change', () => {
    const cep = fetch(`https://viacep.com.br/ws/${input.value}/json/`)
    cep.then(r => {
        r.json().then(r => {
            response.innerText = r.logradouro;
        })
    })
})

const preco = document.querySelector('[data-preco]');
let contador = 1;
function atualizarPreco() { 
const bitcoinAPI = fetch('https://blockchain.info/ticker');

bitcoinAPI.then(r => {
        r.json().then(r => {
            const valorEmReais = r.BRL.buy;
            const brCurrency = new Intl.NumberFormat('BRL', {
                style: 'currency',
                currency: 'BRL',
            })
            const valorFormatadoEmReais = brCurrency.format(valorEmReais);
            
            contador++;
            preco.innerText = valorFormatadoEmReais + contador;

        });
    });
}

atualizarPreco();
setInterval(atualizarPreco, 1000);

function atualizarPiada() {
    const piadasChucknorris = fetch('https://api.chucknorris.io/jokes/random');

    piadasChucknorris.then(r => {
        r.json().then(r => {
            const resposta = document.querySelector('.resposta');
            resposta.innerText = r.value
        })
    })
}

const btn = document.querySelector('button');

btn.addEventListener('click', atualizarPiada);