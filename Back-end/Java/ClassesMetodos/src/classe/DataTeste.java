package classe;

public class DataTeste {

	public static void main(String[] args) {
		Data data1 = new Data();
		data1.dia = 31;
		data1.mes = 7;
		data1.ano = 2009;	
		
		Data data2 = new Data(31, 7, 2009);
		 
		Data data3 = new Data();
		data3.imprimirDataFormatada();
		data2.imprimirDataFormatada();
	}

}
