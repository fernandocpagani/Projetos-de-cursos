package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Retangulo;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		Retangulo x; 
		x = new Retangulo();
	
		System.out.println("Enter the measusres of retangulo: ");
		x.altura = sc.nextDouble();
		x.largura = sc.nextDouble();
		
	
		System.out.printf("AREA = %.2f%n", x.area());
		System.out.printf("PERIMETER = %.2f%n", x.perimeter());
		System.out.printf("DIAGONAL = %.2f%n", x.diagonal());
		
		sc.close();
	}

}