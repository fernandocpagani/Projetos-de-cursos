package application;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

import entities.ImportedProduct;
import entities.Product;
import entities.UsedProduct; 


public class Program {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		List<Product> list = new ArrayList<>();
		
		System.out.print("Insira o número de produtos: ");
		int N = sc.nextInt();		
		
		for (int i=1; i<=N; i++) {
			System.out.println();
			System.out.println("DADOS DO PRODUTO #" + i + ":");
			System.out.print("Tipo do produto: comum, usado ou importado (c/u/i) ");
			char ch = sc.next().charAt(0);
			if (ch == 'c') {
				System.out.print("Nome: ");
				sc.nextLine();
				String name = sc.nextLine();
				System.out.print("Preço: ");
				Double price = sc.nextDouble();
				list.add(new Product(name, price));
			} else if (ch == 'u') {
				System.out.print("Nome: ");
				sc.nextLine();
				String name = sc.nextLine();
				System.out.print("Preço: ");
				Double price = sc.nextDouble();
				System.out.print("Data de fabricação: ");
				LocalDate date = LocalDate.parse(sc.next(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
				list.add(new UsedProduct(name, price, date));
			}else {
				System.out.print("Nome: ");
				sc.nextLine();
				String name = sc.nextLine();
				System.out.print("Preço: ");
				Double price = sc.nextDouble();
				System.out.print("Impostos: ");
				Double customsFee = sc.nextDouble();				
				list.add(new ImportedProduct(name, price,customsFee ));
			}
		}
		
		System.out.println();
		System.out.println("PREÇOS:");
		for (Product prod : list) {
			System.out.println(prod.priceTag());
		}
		
		System.out.println();
		System.out.println("Exercício Curso Java");
		System.out.println("Professor: Nelio Alves");
		System.out.println("Aluno: Fernando C. Pagani");

		sc.close();
	}	
	
}
