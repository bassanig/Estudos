package classe;

public class AreaCirc {
	
	double raio;
	static double pi = 3.14;
	
	AreaCirc(double raioInicial) {
		this.raio = raioInicial;
	}
	
	double area() {
		return pi * Math.pow(raio, 2);
	}
}
