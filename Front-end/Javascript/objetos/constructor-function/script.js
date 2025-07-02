const carro = {
    marca: 'marca',
    preco: 0,
}


function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}


const fiat = new Carro('Fiat', 49000);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos



function Pessoa(nomeRecebido, idadeRecebido) {
    this.nome = nomeRecebido;
    this.idade = idadeRecebido;
}

const pessoa1 = new Pessoa('Jõao', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);


function Dom(element) {
    this.elements = document.querySelectorAll(element);
    this.addClass = (classeAtribuida) => {
        this.elements.forEach((item) => item.classList.add(classeAtribuida));
    }
    this.removeClass = (classeRemovida) => {
        this.elements.forEach((item) => item.classList.remove(classeRemovida));
    }

    this.addMarginB = (tamanhoAtribuido) => {
        this.elements.forEach((e) => {
            e.style.marginBottom = `${tamanhoAtribuido}px`;
        })
    }
}

const gor = new Dom('ul');


gor.addClass('ativo');
gor.removeClass('ativo');
gor.addMarginB(5);
