package classe;

public class ProdutoTeste {
	public static void main(String[] args) {
		Produto p1 = new Produto("Guilherme");
		p1.preco = 4442.89;
		p1.desconto = 0.25;
		
		Produto p2 = new Produto("Bassani");
		p2.preco = 5244.89;
		p2.desconto = 0.25;
		
		double precoFinal1 = p1.precoComDesconto();
		double precoFinal2 = p2.precoComDesconto();
		
		System.out.println(precoFinal1);
		System.out.println(precoFinal2);
	}
}
