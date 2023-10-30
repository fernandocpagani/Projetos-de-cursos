package application;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

import entities.Company;
import entities.Individual;
import entities.TaxPayer;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		List<TaxPayer> list = new ArrayList<TaxPayer>();
		
		System.out.print("Insira o número de contribuintes: ");
		int n = sc.nextInt();	
		
		for (int i=1; i<=n; i++) {
			System.out.println();
			System.out.println("Contribuintes #" + i +" :");
			System.out.print("Pessoa física ou Pessoa juridica (f/j)? ");
			char ch = sc.next().charAt(0);
			System.out.print("Nome: ");
			String name = sc.next();
			System.out.print("Rendimento anual: ");
			double anualIncome = sc.nextDouble();
			if (ch == 'f') {				
				System.out.print("Gastos médicos: ");
				double healthExpenditures = sc.nextDouble();
				list.add(new Individual(name, anualIncome, healthExpenditures));
			} else {
				System.out.print("Número de funcionários: ");
				int numberOfEmployees = sc.nextInt();
				list.add(new Company(name, anualIncome, numberOfEmployees));
			}
		}
		
		System.out.println();
		System.out.println("Impostos pagos: ");		
		for (TaxPayer tp : list) {		
			System.out.println(tp.getName() + ": $ " + String.format("%.2f", tp.tax()));			
		}
		
		double sum = 0.0;
		for (TaxPayer tp : list) {
			sum += tp.tax();						
		}
		
		System.out.println();
		System.out.println("TOTAL DE IMPOSTOS: $ " + String.format("%.2f", sum));	

		System.out.println();
		System.out.println("Exercício Curso Java");
		System.out.println("Professor: Nelio Alves");
		System.out.println("Aluno: Fernando C. Pagani");

		sc.close();
	}

}
