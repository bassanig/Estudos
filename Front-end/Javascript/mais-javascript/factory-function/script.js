// function createButton(text) {
//   function element() {
//     const btn = document.createElement('button');
//     btn.innerText = text;
//     return btn;
//   }
//   return {
//     element: element,
//     texto: text,
//   }
// }

// function Pessoa(nome) {
//   if(!(this instanceof Pessoa)) {
//     return new Pessoa(nome)
//   }
//   this.nome = nome;
// }

// const guilherme = Pessoa('guilherme');
// console.log(guilherme);

function $$(seleted) {
  const elements = document.querySelectorAll(seleted);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
      console.log(this);
    })
    return this;
  }
  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    })
    return this;
  }
  
  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    })
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    })
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    })
    return this
  }
  return {
    elements,
    hide,
    show,
    on,
  }
}

const btn = $$('button') 
console.log(btn.hide().show());
