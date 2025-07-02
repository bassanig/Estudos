function Button(text, background) {
    this.text = text;
    this.bg = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.classList.add(this.bg);
    return buttonELement;
}

class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    andar() {
        console.log(`${this.nome} andou`);
    }
}

const honda = new Carro('honda', 1990);

honda.andar()

console.log(honda);


// class Button {
//     constructor(options) {
//         this.options = options
//     }
//     static createButton(text, background) {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         buttonElement.style.backgroundColor = background;
//         return buttonElement;
//     }
// }

// const blueButton = new Button({
//     backgroundColor: 'blue',
//     fontSize: '2rem',
// })

// console.log(blueButton);

// const btn = Button.createButton('Clique', 'blue')
// console.log(btn);

