
const perguntas = document.querySelectorAll('dt');



function mostrarResposta(index) {
    perguntas[index].classList.toggle('active');
    perguntas[index].nextElementSibling.classList.toggle('active');
}


perguntas.forEach((pergunta, index) => {
    pergunta.addEventListener('click', () => {
        mostrarResposta(index)
    })
})