package application;

import java.util.Locale;
import java.util.Scanner;

import entities.salary;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
	
		
		salary sal = new salary();	
		
		System.out.print("Name: ");
		sal.name = sc.nextLine();
		System.out.print("Gross Salary: ");
		sal.price = sc.nextDouble();
		System.out.print("Tax: ");
		sal.tax = sc.nextDouble();
		
		System.out.println(" ");
		System.out.println("Employee: " + sal);
		
		System.out.println(" ");
		System.out.println("Which percentage to increase salary: ");
		Double percentage = sc.nextDouble();
		sal.increaseSalary(percentage);
		
		
		System.out.println(" ");
		System.out.println("Employee: " + sal);
		
		sc.close();
	}

}