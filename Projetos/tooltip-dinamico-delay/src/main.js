import './style.css'

// 🧪 Exercício 1 – Tooltip dinâmico com delay
// Descrição:

// Crie uma página com vários botões. Quando o usuário passar o mouse sobre um botão, uma tooltip deve aparecer após 500ms com uma mensagem personalizada (usando o dataset). A tooltip deve sumir se o usuário sair do botão antes dos 500ms.

// Conceitos usados:

// dataset

// setTimeout / clearTimeout

// DOM e mouseover / mouseout

// Tooltip

const buttons = document.querySelectorAll('[data-btn]');

if(buttons) {
  buttons.forEach((btn) => {
    btn.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(event) {
    const tooltipBox = createTooltip(this);
    tooltipBox.style.left = event.pageX + "px";
    tooltipBox.style.top = event.pageY + "px";

    onMouseMove.element = this;
    onMouseMove.tooltipBox = tooltipBox;
    
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
  }

  const onMouseLeave = {
    handleEvent(event) {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  function createTooltip(btn) {
    const tooltipBox = document.createElement('div');
    const bg = getComputedStyle(btn).backgroundColor;
    tooltipBox.className = `font-bold p-4 rounded-lg absolute`;
    tooltipBox.style.backgroundColor = bg;
    
    if(btn.dataset.btn === 'adicionar') {
      tooltipBox.innerText = 'Esse botão adiciona';
    } else if (btn.dataset.btn === 'remover') {
      tooltipBox.innerText = 'Esse botão remove';
    } else {
      tooltipBox.innerText = 'Esse botão salva'
    }
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

