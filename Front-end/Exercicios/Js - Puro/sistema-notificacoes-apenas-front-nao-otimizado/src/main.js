import './style.css'
// Exercício 2 – Sistema de Notificações Personalizadas (com Timeout e Cancelamento)
// 🧠 Descrição:
// Crie um sistema de notificações que aparecem no canto da tela e somem automaticamente após 5 segundos, a menos que o usuário passe o mouse por cima (isso pausa o tempo). Quando o mouse sai, o tempo continua de onde parou.

// 🎯 O que você vai praticar:
// DOM e appendChild

// setTimeout, clearTimeout

// mouseover / mouseout

// dataset

// CSS para posicionamento absoluto

// ✅ Regras:
// Botões diferentes geram notificações diferentes (ex: sucesso, erro, info)

// Cada notificação deve sumir após 5s (com setTimeout)

// Se o mouse passar por cima da notificação, o tempo pausa

// Quando o mouse sai, o tempo continua

// Pode estilizar usando Tailwind ou CSS comum

const buttons = document.querySelectorAll('[data-notify]');
const divNotify = document.querySelector('[data-notify-div="divPai"]')
console.log(divNotify);

buttons.forEach((btn) => {
  btn.addEventListener('click', createNotification)
})

function createNotification() {
  const notifyBox = document.createElement('div');
  const element = notifyBox;

  notifyBox.className = "border-4 px-12 py-2 rounded-sm animate-slideLeft";
  if(this.dataset.notify === 'sucesso') {
    notifyBox.className += " bg-green-100 border-green-500";
    notifyBox.innerText = 'Dificil';
  } else if (this.dataset.notify === 'erro') {
    notifyBox.className += " bg-red-100 border-red-500";
    notifyBox.innerText = '404';
  } else {
    notifyBox.className += " bg-yellow-100 border-yellow-500"
    notifyBox.innerText = 'Infomation';
  }
  divNotify.appendChild(notifyBox);
  
  let timer = 5000;
  let start = Date.now()
  let timerRemover = setTimeout(() => {
    element.remove()
  }, timer)

  element.addEventListener('mouseover', () => {
    clearTimeout(timerRemover)
    timer -= Date.now() - start;
  });
  element.addEventListener('mouseleave', () => {
    timerRemover = setTimeout(() => {
      start = Date.now();
      element.remove();
    }, timer)
  })
}
