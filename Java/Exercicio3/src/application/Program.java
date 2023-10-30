package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Grade;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		
	
		
		Grade grade = new Grade();	
		
		System.out.print("Name: ");
		grade.name = sc.nextLine();
		System.out.print("Grade 1: ");
		grade.grade1 = sc.nextDouble();
		System.out.print("Grade 2: ");
		grade.grade2 = sc.nextDouble();
		System.out.print("Grade 3: ");
		grade.grade3 = sc.nextDouble();
		
		System.out.printf("FINAL GRADE: %.4f%n", grade.finalGrade());
		
		if (grade.finalGrade() > 60) {
			System.out.println("PASS");
		} else {
			System.out.println("Failed");
			System.out.printf("MISSING %.2f POINTS%n", (60 -grade.finalGrade()));
		}
		sc.close();
	}

}