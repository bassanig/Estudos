class Carro {
  constructor(rodas, cavalos) {
    this.rodas = rodas;
    this.cavalos = this.cavalos;
  }
  acelerar() {
    console.log('Acelerou');
    
  }
}

class Moto extends Carro {
  empinar() {
    console.log('Empionu' + this.rodas);
  }
  acelerar() {
    super.acelerar() + " Muito";
  }
}

const honda = new Moto(2, 3);
const carro = new Carro(4, 90);
console.log(carro);

honda.empinar()
honda.acelerar()