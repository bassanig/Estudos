package classe;

public class Data {
	static double pi = 3.14;
	int dia;
	int mes;
	int ano;
	
	Data(int diaInicial, int mesInicial, int anoInicial) {
		this.dia = diaInicial;
		this.mes = mesInicial;
		this.ano = anoInicial;
	}
	
	Data() {
		this.dia = 1;
		this.mes = 1;
		this.ano = 1970;
	}
	
	String dataFormatada() {
		return String.format("%d/%d/%d", dia, mes, ano);
	}
	
	void imprimirDataFormatada() {
		System.out.println(this.dataFormatada());
	}
}
