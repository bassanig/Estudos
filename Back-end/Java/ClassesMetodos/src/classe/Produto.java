package classe;

public class Produto {
	String nome;
	double preco;
	double desconto;
	
	Produto(String nomeInicial) {
		nome = nomeInicial;
	}
	
	Produto(String nomeInicial, double precoInicial) {
		preco = precoInicial;
	}
	
	Produto() {
		
	}
	
	double precoComDesconto() {
		return preco * (1 - desconto);
	}
}
