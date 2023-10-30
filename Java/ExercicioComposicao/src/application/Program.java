package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import entities.Department;
import entities.HourContract;
import entities.Worker;
import entities.enums.WorkerLevel;

public class Program {

	public static void main(String[] args) throws ParseException {
	
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		System.out.print("Insira o nome do departamento: ");
		String departmentName = sc.nextLine();
		System.out.println();
		
		System.out.println("Insira os dados do trabalhador: ");
		System.out.print("Nome: ");
		String workerName = sc.nextLine();
		System.out.print("Nível: ");
		String workerLevel = sc.nextLine();
		System.out.print("Base salarial: ");
		double baseSalary = sc.nextDouble();
		
		Worker worker = new Worker(workerName, WorkerLevel.valueOf(workerLevel), baseSalary, new Department(departmentName));

		System.out.print("Quantos contratos para esse trabalhador ? ");		
		int n = sc.nextInt();		
				
		for (int i=1; i<=n; i++) {
			System.out.println();
			System.out.println("Insira os dados do contrato #" + i + " :");
			System.out.print("Data (Dia/Mês/Ano):");
			Date contractDate = sdf.parse(sc.next());
			System.out.print("Valor por hora: ");
			double valuePerHour = sc.nextDouble();
			System.out.print("Duração (horas): ");
			int hours = sc.nextInt();
			HourContract contract = new HourContract(contractDate, valuePerHour, hours);
			worker.addContract(contract);
		}
		
		System.out.println();
		
		System.out.print("Insira o mês e ano para calcular a renda (Mês/Ano): ");	
		String monthAndYear = sc.next();
		
		System.out.println();
		
		int month = Integer.parseInt(monthAndYear.substring(0, 2));
		int year = Integer.parseInt(monthAndYear.substring(3));
		System.out.println("Nome: " + worker.getName());
		System.out.println("Departamento: " + worker.getDepartment().getName());
		System.out.println("Rendimentos para " + monthAndYear + ": " + String.format("%.2f", worker.income(year, month)));
		
		System.out.println();
		System.out.println("Exercício Curso Java");
		System.out.println("Professor: Nelio Alves");
		System.out.println("Aluno: Fernando C. Pagani");
	}

}
