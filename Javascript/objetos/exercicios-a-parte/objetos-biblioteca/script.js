// Objetivo: Criar um sistema com Livro, Usuario e Biblioteca. Cada um será uma função construtora.

// Requisitos:
// Livro(titulo, autor, disponivel)

// Método: emprestar(), que marca como indisponível.

// Método: devolver(), que marca como disponível.

// Usuario(nome)

// Método: pegarEmprestado(livro), se disponível.

// Método: devolverLivro(livro)

// Biblioteca(nome)

// Método: adicionarLivro(livro)

// Método: listarLivrosDisponiveis()

// Dica: Requer composição e controle de estado dos objetos.



function Biblioteca(nome) {
  this.livrosDisponiveis = []
  this.livrosEmprestados = []
  this

  let _nome = nome

  Object.defineProperties(this, {
  nome: {
      get() {
        return _nome
      },
      set(novoNome) {
        _nome = novoNome
      },
    }
  });
}

Biblioteca.prototype.adicionarLivro = function(livro) {
  this.livrosDisponiveis.push(livro);
}

Biblioteca.prototype.removerLivro = function(livro) {
  this.livrosDisponiveis.splice(this.livrosDisponiveis.indexOf(livro), 1)
}

const bibliotecaBassani = new Biblioteca('Biblioteca Bassani')

function Livro(nome, autor, biblioteca) {
  let _nome = nome;
  let _autor = autor;
  Object.defineProperties(this, {
    nome: {
      get() {
        return _nome;
      },
      set(novoNome) {
        _nome = novoNome;
      }
    },
    autor: {
      get() {
        return _autor;
      },
      set(novoAutor) {
       _autor = novoAutor;
      }
    }
  })
  this.biblioteca = biblioteca;

  biblioteca.livrosDisponiveis.push(this.nome.toLowerCase())
}

const assimFalouZaratustra = new Livro('Assim Falou Zaratustra', 'Nietzche', bibliotecaBassani);

const livro2 = new Livro('Alice no Pais das Maravilhas', 'Edward Clinton', bibliotecaBassani)

console.log(Object.getOwnPropertyNames(assimFalouZaratustra));

console.log(bibliotecaBassani);

function Usuario(nome) {
  this.nome = nome;
}

Usuario.prototype.devolver = function(nome, biblioteca) {
  const indexLivro = biblioteca.livrosEmprestados.indexOf(nome.toLowerCase());
  if(indexLivro !== -1){
    biblioteca.livrosDisponiveis.push(nome.toLowerCase());
    biblioteca.livrosEmprestados.splice(indexLivro, 1)
  } else {
    return 'Livro não foi emprestado';
  }
}

Usuario.prototype.pegarEmprestado = function(nome, biblioteca) {
  const indexLivro = biblioteca.livrosDisponiveis.indexOf(nome.toLowerCase());
  if(indexLivro !== -1) {
    biblioteca.livrosEmprestados.push(nome.toLowerCase())
    biblioteca.livrosDisponiveis.splice(indexLivro, 1);
  } else {
    return 'Livro não existe!'
  }
}

const usuario = new Usuario('Guilherme Bassani');
usuario.pegarEmprestado('Assim falou zaratustra', bibliotecaBassani);
usuario.devolver('assim falou zaratustra', bibliotecaBassani);

usuario.pegarEmprestado('alice no pais das maravilhas', bibliotecaBassani)

const livro3 = new Livro('Ponto de Inflexao', 'Flavio Augusto', bibliotecaBassani);

console.log(usuario.devolver("awd awda", bibliotecaBassani))

usuario.devolver('alice no pais das maravilhas', bibliotecaBassani)