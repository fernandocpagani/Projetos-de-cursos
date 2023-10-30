package entities;

public class salary {
	
	public String name;
	public double price;
	public double tax;
	
	
	
	public double salaryFree() {
		return price - tax;
	}
	
	
	
	public void increaseSalary(double percentage) {
		this.price += price * percentage / 100.0;
	}
	
	
	
	public String toString() {
		return name
				+ ", $"
				+ String.format("%.2f", salaryFree());	}

}
