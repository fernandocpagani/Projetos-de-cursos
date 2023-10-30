package entities;

public class Retangulo {
	
	public String ret;
	public double altura;
	public double largura;
	
	
	public double area() {
		return altura * largura;
	}
	
	public double perimeter() {
		return 2 * (altura + largura);
	}
	
	public double diagonal() {
		return Math. sqrt(Math. pow(altura, 2) + Math. pow(largura, 2));
	}
	



}
