const iniciarBtn = document.querySelector('[data-btn="iniciar"]')
const pausarBtn = document.querySelector('[data-btn="pausar"]')
const cronometro = document.querySelector('span');



let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        cronometro.innerText = i++;
    }, 100);
    iniciarBtn.setAttribute('disabled', "")
}

function pausarTempo() {
    clearInterval(timer)
    iniciarBtn.removeAttribute('disabled')
}

function resetarTempo() {
    cronometro.innerText = 0;
    i = 0;
    if(iniciarBtn.hasAttribute('disabled')) {
        iniciarBtn.removeAttribute('disabled')
    }
}

iniciarBtn.addEventListener('click', iniciarTempo);
pausarBtn.addEventListener('click', pausarTempo);
pausarBtn.addEventListener('dblclick', resetarTempo)