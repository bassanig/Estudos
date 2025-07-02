// const h2 = document.querySelectorAll('.animais-descricao section h2');
// const h2Array = Array.from(h2);
// const primeiroH2 = h2Array[0];


// console.log(primeiroH2.innerHTML);



// primeiroH2Object = primeiroH2.getBoundingClientRect();
// console.log(primeiroH2Object.top);

// const imgs = document.querySelectorAll('.animais-lista img');
// const imgsArray = Array.from(imgs);

// let soma = 0;

// imgsArray.forEach((item) => {
//     soma += item.offsetWidth;
// })


// console.log(soma);


// const links = document.querySelectorAll('a');
// const linksArray = Array.from(links);

// const linksArrayObject = [];

// linksArray.forEach((item) => {
//     linksArrayObject.push(item.getBoundingClientRect());
// })

// linksArrayObject.forEach((item) => {
//     if (!item.height >= 48 && !item.width >= 48) {
//         console.log('tamanho menor que 48px');
//     }
// })


// const itemsH1 = document.querySelectorAll('h1');


// const itemsH1Array = Array.from(itemsH1);
// const ultimoH1 = itemsH1Array[itemsH1Array.length - 1];

// console.log(ultimoH1.innerHTML);

// function apagarTexto(ultimoH1) {
//     ultimoH1.innerHTML = '';
// }

// function atualizarTexto() {
//     let novoNumero = Number(ultimoH1.innerHTML) + 1;
    
//     apagarTexto(ultimoH1);
//     ultimoH1.innerHTML = novoNumero;
// }


const smallBrowser = window.matchMedia('(max-width: 600px)').matches;

if (smallBrowser) {
    document.querySelector('.menu').classList.add('menu-mobile');
}
