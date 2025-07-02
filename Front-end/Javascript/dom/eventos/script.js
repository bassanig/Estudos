// const imgs = document.querySelectorAll('img');


// function callback(event) {
//     console.log(event);   
// }

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//     console.log(event.currentTarget);
//     console.log(event.target);
//     console.log(event.type);
    
// }

// animaisLista.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(e) {
//     e.preventDefault();
//     console.log(this);
//     console.log(this.getAttribute('href'));
// }

// linkExterno.addEventListener('click', handleLinkExterno);


//exercicio

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 




const links = document.querySelectorAll('a[href^="#"]')
const arrayLinks = Array.from(links)

console.log(links);



function handleLinkClick(event) {
    event.preventDefault();
    links.forEach((item) => {
        item.classList.remove('ativo');
    })
    this.classList.add('ativo');
    links.forEach((item) => console.log(item));
    
}

links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
})



// const todosElementos = document.querySelectorAll('body *');

// function mostrarElemento(event) {
//     event.preventDefault()
//     event.currentTarget.remove();
// }

// todosElementos.forEach((i) => {
//     i.addEventListener('click', mostrarElemento)
// })


function handleClickT(event) {
    console.log(event.key);
    const html = document.querySelector('html');
    if(event.key === 't') {
        html.classList.toggle('textoMaior');
    }
}



window.addEventListener('keydown', handleClickT)