package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import entities.Client;
import entities.Order;
import entities.OrderItem;
import entities.Product;
import model.enums.OrderStatus;



public class Program {

	public static void main(String[] args) throws ParseException {


		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		System.out.println("Insira os dados do cliente: ");
		System.out.print("Nome: ");
		String name = sc.nextLine();
		System.out.print("E-mail: ");
		String email = sc.next();
		System.out.print("Data de nascimento: ");		
		Date birthDate = sdf.parse(sc.next());
		

		Client client = new Client(name, email, birthDate);
		
		System.out.println();
		
		System.out.println("Insira os dados da ordem: ");
		System.out.print("Status: ");
		OrderStatus status = OrderStatus.valueOf(sc.next());
		
		
		Order order = new Order(new Date(), status, client);
		
		System.out.println();
		
		System.out.print("Quantos itens para esse pedido ? ");		
		int N = sc.nextInt();		
				
		for (int i=1; i<=N; i++) {
			System.out.println();
			System.out.println("Insira os dados do pedido #" + i + " :");
			System.out.print("Nome do produto:");
			sc.nextLine();
			String productName = sc.nextLine();
			System.out.print("Valor do produto: ");
			double productPrice = sc.nextDouble();
			System.out.print("Quantidade");
			int quantity = sc.nextInt();

			Product product = new Product(productName, productPrice);
			
			OrderItem it = new OrderItem(quantity, productPrice, product);
			
			order.addItem(it);
		}
		System.out.println();
		System.out.println("Sumário do pedido:");
		System.out.println(order);
		
		System.out.println();
		System.out.println("Exercício Curso Java");
		System.out.println("Professor: Nelio Alves");
		System.out.println("Aluno: Fernando C. Pagani");

		sc.close();
	}

}
